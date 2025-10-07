import CinemaTicketBooking from "@/components/machine-coding-tasks/cinema-ticket-booking/CinemaTicketBooking";
import React from "react";

export default function CinemaTicketBookingPage() {
  return (
    <main className="space-y-6 md:px-6  md:mx:2 ">
      {/* --- Description Section --- */}
      <article className="space-y-2">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          CINEMA TICKET BOOKING
        </h1>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          This project simulates an interactive{" "}
          <strong className="text-gray-200">Cinema Seat Booking System</strong>{" "}
          built using <strong>React</strong> and <strong>Tailwind CSS</strong>.
          It allows users to select, view, and book seats dynamically while
          displaying real-time updates for selected and pre-booked seats.
        </p>

        <p className="text-sm sm:text-base text-neutral-400">
          👉 Explore the full source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/tree/master/components/machine-coding-tasks/cinema-ticket-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub Link
          </a>
        </p>

        <span className="text-xs sm:text-sm text-neutral-500 block">
          ⚡ Note: All seat data and states are managed locally using React
          Hooks. No external libraries (like Shadcn or Redux) are used.
        </span>
      </article>

      {/* --- Main Cinema Ticket Booking Component --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <article>
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-2">
            🎟️ Interactive Cinema Seat Layout
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Choose your preferred seats from Regular, Premium, or VIP sections.
            Pre-booked seats are shown in gray, and selected seats are
            highlighted in green. The total fare updates automatically based on
            your selections.
          </p>
        </article>

        <div className="mt-4 bg-neutral-900 px-2 py-2 lg:pt-4 pb-6 rounded-sm md:rounded-xl">
          <CinemaTicketBooking />
        </div>
      </section>
    </main>
  );
}
