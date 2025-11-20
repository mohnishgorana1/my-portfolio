import CinemaTicketBooking from "@/components/machine-coding-tasks/cinema-ticket-booking/CinemaTicketBooking";
import React from "react";

export default function CinemaTicketBookingPage() {
  return (
    <main className="min-h-screen w-full py-8 md:px-6 md:mx-2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <article className="space-y-3 max-w-6xl mx-auto mb-8 ">
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          This project simulates an interactive{" "}
          <strong className="text-indigo-600">
            Cinema Seat Booking System
          </strong>{" "}
          built using <strong>React</strong> and <strong>Tailwind CSS</strong>.
          It allows users to select, view, and book seats dynamically.
        </p>

        <p className="text-sm sm:text-base text-slate-500">
          👉 Explore the full source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/tree/master/components/machine-coding-tasks/cinema-ticket-booking"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-4 transition-colors"
          >
            GitHub Link
          </a>
        </p>

        <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium border border-orange-200">
          ⚡ Note: All seat data and states are managed locally. No external
          libs.
        </span>
      </article>

      {/* --- Main Cinema Ticket Booking Component --- */}
      {/* Glass Container */}
      <section className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-xl shadow-indigo-100/50 p-1 sm:p-6">
        {/* Decorative Background Blobs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl pointer-events-none"></div>

        <article className="relative z-10 text-center mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-700 mb-1 flex items-center justify-center gap-2">
            <span>🎟️</span> Interactive Cinema Seat Layout
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Choose seats from Regular, Premium, or VIP. Prices update
            automatically.
          </p>
        </article>

        <div className="relative z-10">
          <CinemaTicketBooking />
        </div>
      </section>
    </main>
  );
}
