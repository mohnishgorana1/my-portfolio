'use client'
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
    textColor: isBooked ? "text-neutral-100" : "text-yellow-500/50 ",
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
    <main className="min-h-screen w-full flex flex-col items-center bg-neutral-900/80 text-white md:px-2 py-6">
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <header className="text-center space-y-2">
          <h1 className="hidden sm:flex items-center justify-center text-xl font-bold tracking-wide">
            🎬 CINEMA HALL TICKET BOOKING
          </h1>
          <p className="text-sm opacity-70">Select your preferred seats</p>
        </header>

        <section className="bg-neutral-950/30 rounded-lg md:shadow-sm md::shadow-neutral-500 px-1  py-4 sm:p-6">
          <div className="h-3 bg-neutral-300 rounded-b-full mx-2"></div>
          <h1 className="text-center uppercase opacity-40 text-xs sm:text-sm my-1">
            Screen
          </h1>
          <div className="mt-2 sm:mt-4 flex flex-col items-center overflow-x-auto">
            {seatLayout.map((rowItem, idx) => {
              const { row, type, price, seats } = rowItem;
              return (
                <div
                  key={idx}
                  className="w-full flex items-center justify-center py-2"
                >
                  <span className="mr-1 sm:mr-6 text-base sm:text-xl font-semibold">
                    {row}
                  </span>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
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
                          className={`
                            font-semibold h-5 w-5  sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-xs sm:text-sm rounded-md transition-transform duration-150 
                          ${
                            isBooked
                              ? "opacity-40 cursor-not-allowed"
                              : "hover:scale-110"
                          } 
                          ${
                            isSelected
                              ? "bg-green-500 text-white"
                              : `${bgColor} ${textColor}`
                          }
                          ${seatNumber === 6 ? "ml-4 sm:ml-6" : ""}`}
                          onClick={() => {
                            handleSeatSelection(seatNumber, row);
                          }}
                        >
                          {seatNumber}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            {TICKET_TYPE.map(({ type, color, price }) => (
              <div
                key={type}
                className="flex items-center gap-1 sm:gap-2justify-center"
              >
                <span
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded ${color} `}
                ></span>
                <span className="flex gap-x-1 items-center">
                  <p>{type}</p>
                  {price && <p className="opacity-80">(₹{price})</p>}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-neutral-950/30 rounded-lg shadow-sm shadow-neutral-500 px-3 py-4 sm:p-6">
          <h1 className="text-sm font-bold sm:text-base md:text-xl mb-3">
            Booking Summary
          </h1>

          {selectedSeats && selectedSeats.length > 0 ? (
            <div className="space-y-2 text-sm sm:text-base">
              {selectedSeats.map((seat: any, i: any) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-neutral-700 pb-1"
                >
                  <p>
                    Row <span className="font-semibold">{seat.row}</span> — Seat{" "}
                    <span className="font-semibold">{seat.seatNumber}</span>
                  </p>
                  <p>
                    {seat.type} • ₹{seat.price}
                  </p>
                </div>
              ))}

              <div className="flex justify-between font-semibold mt-3">
                <p>Total</p>
                <p>
                  ₹
                  {selectedSeats.reduce(
                    (sum: any, seat: any) => sum + seat.price,
                    0
                  )}
                </p>
              </div>
            </div>
          ) : (
            <p className="opacity-70 text-sm">No seats selected yet.</p>
          )}

          <button
            className="mt-4 w-full py-2 rounded-md bg-green-600 font-semibold text-sm sm:text-base hover:bg-green-700 transition"
            disabled={selectedSeats && selectedSeats.length === 0}
          >
            Book Seats
          </button>
        </section>
      </div>
    </main>
  );
}

export default CinemaTicketBooking;
