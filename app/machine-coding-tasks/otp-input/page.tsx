"use client";
import OTPINPUT from "@/components/machine-coding-tasks/OTPINPUT/Otp-input";
import React, { useState } from "react";

function OtpInputPage() {
  const [digitCount, setDigitCount] = useState(5);

  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      <article className="space-y-2 text-base text-gray-400">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          OTP INPUT
        </h1>

        <p className="text-gray-200">
          A fully functional and intuitive{" "}
          <strong>OTP (One-Time Password) Input Component</strong> built using{" "}
          <strong>React</strong> and <strong>Tailwind CSS</strong>. This
          component enhances the user experience by automatically managing input
          focus and validation across multiple OTP boxes.
        </p>

        <ul className="ml-2 list-disc list-inside space-y-1">
          <li>
            1. Supports a configurable <strong>OTP digit length</strong>. You
            can dynamically select how many OTP boxes you want to render:
            <select
              value={digitCount}
              onChange={(e) => setDigitCount(Number(e.target.value))}
              className="ml-2 bg-neutral-900 border border-neutral-700 text-neutral-300 rounded-md px-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              {[4, 5, 6, 8].map((num) => (
                <option key={num} value={num}>
                  {num} digits
                </option>
              ))}
            </select>
          </li>

          <li>
            2. Automatically moves focus to the next input as you type and
            supports <strong>Backspace navigation</strong> to move backward.
          </li>
          <li>
            3. Restricts non-numeric input and disables future boxes until
            previous ones are filled.
          </li>
          <li>
            4. Automatically <strong>submits OTP</strong> when all digits are
            filled and displays the last submitted value.
          </li>
          <li>
            5. Includes a <strong>Reset</strong> button to clear inputs and
            restart the flow instantly.
          </li>
        </ul>

        <p className="text-neutral-400">
          👉 You can check out the full source code here:{" "}
          <a
            href="https://github.com/mohnishgorana1/my-portfolio/blob/master/components/machine-coding-tasks/OTPINPUT/Otp-input.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            GitHub Link
          </a>
        </p>

        <span className="text-neutral-500">
          ⚡ Note: Built entirely with <strong>React + Tailwind CSS</strong> —
          no third-party UI components or OTP libraries were used. The focus is
          on mastering controlled inputs, keyboard events, and focus management
          in React.
        </span>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <OTPINPUT OTP_DIGITS_COUNT={digitCount} />
      </section>
    </main>
  );
}

export default OtpInputPage;
