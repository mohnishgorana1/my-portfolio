import React, { useEffect, useRef, useState } from "react";

const OTP_DIGITS_COUNT: number = 5;

function OTPINPUT() {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(OTP_DIGITS_COUNT).fill(""));
  const [submittedOpt, setSubmittedOpt] = useState<string | null>(null);

  const resetFields = () => {
    setOtp(Array(OTP_DIGITS_COUNT).fill(""));
    inputRefs.current[0]?.focus();
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleChange = (value: string, idx: number) => {
    if (!/^[0-9]?$/.test(value)) return; // sirf number allow

    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    if (value && idx < OTP_DIGITS_COUNT - 1) {
      inputRefs.current[idx + 1]?.focus();
    }

    // auto-submit if last filled
    if (idx === OTP_DIGITS_COUNT - 1) {
      const otpValue = newOtp.join("");
      if (!newOtp.includes("")) {
        setSubmittedOpt(otpValue);
        resetFields();
      }
    }
  };

  // find the first empty index → only that input should be enabled
  const activeIndex = otp.findIndex((digit) => digit === "");
  const currentActive = activeIndex === -1 ? OTP_DIGITS_COUNT - 1 : activeIndex;

  // every otp change par active input ko focus karo bocaues disabled se focus hat jata hai
  useEffect(() => {
    inputRefs.current[currentActive]?.focus();
  }, [currentActive]);

  return (
    <main className="min-h-72 grid md:grid-cols-2 gap-x-3 gap-y-3 mb-5">
      <div className="space-y-3 bg-neutral-900 px-4 py-2 rounded-sm md:rounded-xl flex flex-col items-center justify-center">
        <h3 className="text-xl">
          {" "}
          Validate OTP{" "}
          <span className="text-neutral-500 text-lg">(auto-submit)</span>
        </h3>
        <span className="flex">
          {Array.from({ length: OTP_DIGITS_COUNT }).map((_, idx) => (
            <input
              type="text"
              key={idx}
              maxLength={1}
              value={otp[idx]}
              disabled={idx !== currentActive}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(element) => {
                if (element) {
                  inputRefs.current[idx] = element;
                }
              }}
              className={`w-12 h-12 text-center text-lg border rounded-md m-2 
                ${
                  idx === currentActive
                    ? "focus:outline-none focus:ring-2 focus:ring-blue-700 bg-neutral-800"
                    : "bg-neutral-700 opacity-50 cursor-not-allowed"
                }`}
            />
          ))}
        </span>
        <button
          onClick={resetFields}
          className="px-3 py-1 rounded-lg bg-neutral-950 shadow-sm shadow-neutral-700"
        >
          Reset OTP
        </button>
      </div>
      <div className="bg-neutral-900/55 px-4 py-2 rounded-sm md:rounded-xl flex items-center justify-center">
        <h2 className="text-xl">
          Last Submitted OTP{" "}
          <span className="font-sans font-bold text-blue-400">
            {submittedOpt}
          </span>
        </h2>
      </div>
    </main>
  );
}

export default OTPINPUT;
