"use client";
import OTPINPUT from "@/components/machine-coding-tasks/OTPINPUT/Otp-input";
import Link from "next/link";
import React, { useState } from "react";
import { BsShieldLock } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function OtpInputPage() {
  const [digitCount, setDigitCount] = useState(5);

  return (
    <main className="min-h-screen w-full space-y-5 py-8 md:px-6 md:mx-2 bg-gradient-to-br from-blue-50 via-emerald-50 to-cyan-50">
      <article className="grid md:grid-cols-12 gap-y-3 mb-10">
        <div className="md:col-span-8 flex items-start gap-x-3 ">
          <div className="inline-flex items-center justify-center p-2 bg-blue-200/80  backdrop-blur-xl rounded-xl shadow-sm">
            <BsShieldLock className="text-3xl text-blue-600" />
          </div>
          <div className="space-y-2">
            <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
              A fully functional and intuitive{" "}
              <strong className="text-blue-700">
                OTP (One-Time Password) Input
              </strong>{" "}
              built with <strong>React</strong> & <strong>Tailwind CSS</strong>.
              <br />
              It handles focus management, validation, and backspace navigation
              automatically.
            </p>
            <Link
              href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/OTPINPUT/Otp-input.tsx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:border-blue-300 hover:text-blue-800 font-semibold bg-blue-50 px-4 py-2 rounded-full border border-blue-100 hover:bg-indigo-100 transition-colors duration-300 ease-in-out"
            >
              <FaGithub />
              View Source Code
            </Link>
          </div>
        </div>
        <div className="md:col-span-4 ml-auto text-sm flex flex-wrap justify-center md:justify-end gap-2 text-slate-700 py-1 ">
          <span className="w-44 flex items-center gap-1 rounded-full px-2 py-0.5 bg-blue-200/60">✨ Auto-focus</span>
          <span className="w-44 flex items-center gap-1 rounded-full px-2 py-0.5 bg-blue-200/60">🔙 Backspace Support</span>
          <span className="w-44 flex items-center gap-1 rounded-full px-2 py-0.5 bg-blue-200/60">🔢 Numbers Only</span>
          <span className="w-44 flex items-center gap-1 rounded-full px-2 py-0.5 bg-blue-200/60">🚀 Auto-Submit</span>
        </div>
      </article>

      {/* Control Panel */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <div className="bg-gray-300/70 backdrop-blur-md border border-gray-300/50 p-2 rounded-full shadow-md flex items-center gap-3 px-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Config:
          </span>
          <div className="flex items-center gap-2">
            <label
              htmlFor="digit-select"
              className="text-sm text-slate-700 font-medium"
            >
              Digit Length:
            </label>
            <select
              id="digit-select"
              value={digitCount}
              onChange={(e) => setDigitCount(Number(e.target.value))}
              className="bg-blue-50 border border-blue-200 text-blue-800 text-sm font-bold rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-blue-100 transition-colors"
            >
              {[4, 5, 6, 8].map((num) => (
                <option key={num} value={num}>
                  {num} digits
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* --- Demo Section --- */}
      <section className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl border border-white/60 bg-blue-300/30 backdrop-blur-lg shadow-2xl shadow-blue-100/40 p-1 sm:px-6 sm:py-12">
        {/* Decorative Blobs */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-600/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <OTPINPUT OTP_DIGITS_COUNT={digitCount} />
        </div>
      </section>
    </main>
  );
}

export default OtpInputPage;
