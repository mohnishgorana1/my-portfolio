"use client";
import React, { useEffect, useState } from "react";

const TICKET_TYPE = [
  {
    type: "Regular",
    price: "150",
    color: "border border-blue-900",
  },
  {
    type: "Premium",
    price: "250",
    color: "border border-purple-900",
  },
  {
    type: "VIP",
    price: "350",
    color: "border border-yellow-900",
  },
  {
    type: "Selected",
    color: "bg-green-500",
  },
  {
    type: "Booked",
    color: "bg-neutral-600",
  },
];
const TOTAL_ROWS = 8; // A-H
const SEATS_PER_ROW = 12;
const PRE_BOOKED_SEATS = ["A1", "H10", "H11", "F6", "F7", "C5", "D9", "D10"];

// Utility functions
const findRowType = (rowIndex: number) => {
  if (rowIndex <= 2) return "Regular"; // A–C
  if (rowIndex <= 4) return "Premium"; // D–E
  return "VIP"; // F–H
};
const findSeatPrice = (rowIndex: number) => {
  if (rowIndex <= 2) return 150;
  if (rowIndex <= 4) return 250;
  return 350;
};
const findRowColor = (
  rowIndex: number,
  isBooked: boolean,
  isSelected: boolean
) => {
  if (isSelected) {
    return { bgColor: "bg-green-500", textColor: "text-white" };
  }
  if (rowIndex <= 2)
    return {
      bgColor: isBooked ? "bg-neutral-600" : "border border-blue-900",
      textColor: isBooked ? "text-neutral-100" : "text-blue-500/50 ",
    };
  if (rowIndex <= 5)
    return {
      bgColor: isBooked ? "bg-neutral-600" : "border border-purple-900",
      textColor: isBooked ? "text-neutral-100" : "text-purple-500/50 ",
    };
  return {
    bgColor: isBooked ? "bg-neutral-600" : "border border-yellow-900",
    textColor: isBooked ? "text-neutral-100" : "text-yellow-700/50 ",
  };
};
const generateSeatLayout = () => {
  return Array.from({ length: TOTAL_ROWS }, (_, i) => {
    const rowLetter = String.fromCharCode(65 + i);
    return {
      row: rowLetter,
      type: findRowType(i),
      price: findSeatPrice(i),
      seats: Array.from({ length: SEATS_PER_ROW }, (_, j) => {
        const seatLabel = `${rowLetter}${j + 1}`;
        const isBooked = PRE_BOOKED_SEATS.includes(seatLabel);
        const { bgColor, textColor } = findRowColor(i, isBooked);
        return {
          seatNumber: j + 1,
          bgColor,
          textColor,
          isBooked,
          isSelected: false,
        };
      }),
    };
  });
};

function CinemaTicketBooking() {
  const [seatLayout, setSeatLayout] = useState(generateSeatLayout());
  const [selectedSeats, setSelectedSeats] = useState<any>();

  const handleSeatSelection = (
    selectedSeatNumber: number,
    rowLetter: string
  ) => {
    setSeatLayout((prev) =>
      prev.map((rowItem) => {
        if (rowItem.row === rowLetter) {
          return {
            ...rowItem,
            seats: rowItem.seats.map((seat) => {
              if (seat.seatNumber === selectedSeatNumber && !seat.isBooked) {
                const newSelected = !seat.isSelected;
                const { bgColor, textColor } = findRowColor(
                  rowLetter.charCodeAt(0) - 65,
                  seat.isBooked,
                  newSelected
                );
                return { ...seat, isSelected: newSelected, bgColor, textColor };
              }
              return seat;
            }),
          };
        }
        return rowItem;
      })
    );
  };

  useEffect(() => {
    console.log(JSON.stringify(seatLayout));
    const newSelectedSeats = seatLayout.flatMap((rowItem) =>
      rowItem.seats
        .filter((seat) => seat.isSelected)
        .map((seat) => ({
          row: rowItem.row,
          seatNumber: seat.seatNumber,
          type: rowItem.type,
          price: rowItem.price,
        }))
    );
    setSelectedSeats(newSelectedSeats);
  }, seatLayout);

  return (
    <main className="w-full flex flex-col items-center md:px-2">
      <div className="w-full max-w-5xl mx-auto space-y-8">
        {/* Seats Section */}
        <section className="bg-white/50 backdrop-blur-sm rounded-3xl shadow-sm border border-white/50 px-2 py-6 sm:p-8 relative">
          {/* Screen Visual */}
          <div className="mb-10 flex flex-col items-center perspective-1000">
            <div className="h-4 w-3/4 sm:w-2/3 bg-gradient-to-b from-slate-300 to-slate-100 rounded-[50%] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] mb-4 transform rotate-x-12"></div>
            <h1 className="text-center uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold text-slate-400">
              Screen this way
            </h1>
          </div>

          {/* Seat Grid */}
          <div className="flex flex-col items-center overflow-x-auto pb-4 no-scrollbar">
            {seatLayout.map((rowItem, idx) => {
              const { row, seats } = rowItem;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center py-1.5 min-w-max"
                >
                  <span className="mr-4 sm:mr-8 text-sm sm:text-base font-bold text-slate-400 w-4">
                    {row}
                  </span>
                  <div className="flex gap-1.5 sm:gap-3">
                    {seats.map((seatItem) => {
                      const {
                        seatNumber,
                        isBooked,
                        isSelected,
                        bgColor,
                        textColor,
                      } = seatItem;
                      return (
                        <button
                          key={seatNumber}
                          disabled={isBooked}
                          className={` relative group flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11  rounded-t-lg rounded-b-md text-xs sm:text-sm font-bold  transition-all duration-200 ease-out border-2
                          ${
                            isBooked
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:-translate-y-1 cursor-pointer"
                          } 
                          ${bgColor} ${textColor}
                          ${seatNumber === 6 ? "mr-4 sm:mr-8" : ""}
                          `}
                          onClick={() => {
                            handleSeatSelection(seatNumber, row);
                          }}
                        >
                          {/* Optional: Small detail for 'seat' look */}
                          <span
                            className={`absolute bottom-0.5 w-[80%] h-[2px] rounded-full opacity-30 ${
                              isSelected ? "bg-white" : "bg-current"
                            }`}
                          ></span>
                          {seatNumber}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm border-t border-slate-100 pt-6">
            {TICKET_TYPE.map(({ type, color, price }) => (
              <div key={type} className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-md ${color} border-2`}></span>
                <div className="flex flex-col leading-none">
                  <span className="font-semibold text-slate-600">{type}</span>
                  {price && (
                    <span className="text-slate-400 text-[10px]">₹{price}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Summary Card */}
        <section className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-indigo-100 border border-white/60 px-4 py-5 sm:p-6 max-w-2xl mx-auto">
          <h1 className="text-lg font-bold sm:text-xl text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
            <span>🧾</span> Booking Summary
          </h1>

          {selectedSeats && selectedSeats.length > 0 ? (
            <div className="space-y-3">
              <div className="max-h-48 overflow-y-auto pr-2 custom-scrollbar space-y-2">
                {selectedSeats.map((seat: any, i: any) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-slate-50 rounded-lg p-3 border border-slate-100"
                  >
                    <div className="text-sm text-slate-600">
                      Row{" "}
                      <span className="font-bold text-slate-800">
                        {seat.row}
                      </span>{" "}
                      — Seat{" "}
                      <span className="font-bold text-slate-800">
                        {seat.seatNumber}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-slate-500 bg-white px-2 py-1 rounded border border-slate-100 shadow-sm">
                      {seat.type} • ₹{seat.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center font-bold text-lg text-slate-800 pt-4 border-t border-slate-200 mt-2">
                <p>Total Amount</p>
                <p className="text-indigo-600">
                  ₹
                  {selectedSeats.reduce(
                    (sum: any, seat: any) => sum + seat.price,
                    0
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div className="py-6 text-center">
              <p className="text-slate-400 text-sm italic">
                Select seats to proceed with booking
              </p>
            </div>
          )}

          <button
            className={`mt-6 w-full py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg
              ${
                selectedSeats && selectedSeats.length > 0
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-emerald-200 hover:-translate-y-0.5"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
              }
            `}
            disabled={!selectedSeats || selectedSeats.length === 0}
          >
            Book{" "}
            {selectedSeats?.length > 0
              ? `${selectedSeats.length} Seats`
              : "Tickets"}
          </button>
        </section>
      </div>
    </main>
  );
}

export default CinemaTicketBooking;
