import OTPINPUT from "@/components/machine-coding-tasks/OTPINPUT/Otp-input";
import React from "react";

function OtpInputPage() {
  return (
    <main className="space-y-6 md:px-6 lg:px-12">
      {/* --- Description Section --- */}
      <article className="space-y-2">
        <h1 className="my-4 text-2xl md:text-3xl font-bold text-neutral-100 text-center">
          OTP INPUT
        </h1>
        <p className="text-base text-gray-400">
          This demonstration showcases a simple{" "}
          <strong>OTP (One-Time Password) Input</strong> component where users
          can enter <strong>5 digits</strong>. It automatically moves focus to
          the next box when typing and supports backspace navigation. On
          completing the last input, the OTP can be submitted automatically.
        </p>
        <p className="text-neutral-400">
          👉 You can check out the source code here:{" "}
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
          ⚡ Note: I have not used any shadcn or other UI library. The entire
          OTP component is built using plain React + Tailwind CSS.
        </span>
      </article>

      {/* --- Demo Section --- */}
      <section className="border border-neutral-800 rounded-lg shadow-sm shadow-neutral-700 p-4">
        <OTPINPUT />
      </section>
    </main>
  );
}

export default OtpInputPage;
