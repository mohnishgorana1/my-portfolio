"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const FORM_STEPS = ["PERSONAL", "EDUCATION", "ADDRESS"] as const;
type FormStep = (typeof FORM_STEPS)[number];

function MultiStepProgressForm() {
  const [currentActiveForm, setCurrentActiveForm] =
    useState<FormStep>("PERSONAL");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    const currentIndex = FORM_STEPS.indexOf(currentActiveForm);
    if (currentIndex < FORM_STEPS.length - 1) {
      setCurrentActiveForm(FORM_STEPS[currentIndex + 1]);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted successfully!");
    setIsSubmitted(true);
  };

  const isStepCompleted = (step: FormStep) => {
    const currentStepIndex = FORM_STEPS.indexOf(currentActiveForm);
    const stepIndex = FORM_STEPS.indexOf(step);
    return stepIndex < currentStepIndex;
  };

  const isStepActive = (step: FormStep) => {
    return step === currentActiveForm;
  };

  return (
    <main className="flex flex-col gap-y-8 w-full items-center pt-8 pb-24">
      {/* --- FORM CONTENT SECTION ----- */}
      <section className="relative w-[90vw] sm:w-[60vw] lg:w-[40vw] min-h-[300px] bg-white/80 backdrop-blur-xl border-t-4 border-b-4 border-y-indigo-500 rounded-2xl shadow-2xl shadow-slate-500/50 p-6 sm:p-8 transition-all duration-500">
        {/* Step 1: Personal */}
        <div
          className={`${
            currentActiveForm !== "PERSONAL" && "hidden"
          } flex flex-col gap-y-5 animate-in slide-in-from-right-4 fade-in duration-300`}
        >
          <div className="mb-2">
            <h2 className="text-xl font-bold text-slate-800">Personal Info</h2>
            <p className="text-sm text-slate-400">Let's get to know you</p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 text-slate-700 transition-all placeholder:text-slate-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 text-slate-700 transition-all placeholder:text-slate-400"
            />
          </div>

          <button
            onClick={handleNext}
            className="mt-4 w-full sm:w-auto self-end bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl px-6 py-3 shadow-lg shadow-indigo-200 transition-all active:scale-95"
          >
            Continue
          </button>
        </div>

        {/* Step 2: Education */}
        <div
          className={`${
            currentActiveForm !== "EDUCATION" && "hidden"
          } flex flex-col gap-y-5 animate-in slide-in-from-right-4 fade-in duration-300`}
        >
          <div className="mb-2">
            <h2 className="text-xl font-bold text-slate-800">Education</h2>
            <p className="text-sm text-slate-400">
              Tell us about your academics
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Highest Qualification"
              className="w-full rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 text-slate-700 transition-all placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="University / Institute Name"
              className="w-full rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 text-slate-700 transition-all placeholder:text-slate-400"
            />
          </div>

          <button
            onClick={handleNext}
            className="mt-4 w-full sm:w-auto self-end bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl px-6 py-3 shadow-lg shadow-indigo-200 transition-all active:scale-95"
          >
            Continue
          </button>
        </div>

        {/* Step 3: Address */}
        <div
          className={`${
            currentActiveForm !== "ADDRESS" && "hidden"
          } flex flex-col gap-y-5 animate-in slide-in-from-right-4 fade-in duration-300`}
        >
          <div className="mb-2">
            <h2 className="text-xl font-bold text-slate-800">Location</h2>
            <p className="text-sm text-slate-400">Where can we find you?</p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="City / District"
              className="w-full rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 text-slate-700 transition-all placeholder:text-slate-400"
            />
            <input
              type="text"
              placeholder="State / Province"
              className="w-full rounded-xl px-4 py-3 bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 text-slate-700 transition-all placeholder:text-slate-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className={`mt-4 w-full rounded-xl font-semibold px-6 py-3 flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95
              ${
                isSubmitted
                  ? "bg-emerald-500 text-white cursor-default shadow-emerald-200"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200"
              }`}
          >
            {isSubmitted ? (
              <>
                <FaCheck className="h-4 w-4" />
                <span>Submitted</span>
              </>
            ) : (
              <span>Complete Registration</span>
            )}
          </button>
        </div>
      </section>

      {/* PROGRESS INDICATOR SECTION */}
      <section className="w-[90vw] sm:w-[60vw] lg:w-[40vw]">
        <div className="flex w-full items-center justify-between px-4 sm:px-10">
          {FORM_STEPS.map((step, index) => {
            const isCompleted = isStepCompleted(step) || isSubmitted;
            const isActive = isStepActive(step) && !isSubmitted;

            return (
              <React.Fragment key={step}>
                {/* Connector Line */}
                {index > 0 && (
                  <div
                    className={`flex-1 mx-2 sm:mx-4 h-1 rounded-full transition-colors duration-500 ease-in-out ${
                      isCompleted ? "bg-indigo-500" : "bg-slate-200"
                    }`}
                  ></div>
                )}

                {/* Step Circle */}
                <div className="flex flex-col items-center gap-2 relative group">
                  <div
                    className={`
                        rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center 
                        text-sm font-bold transition-all duration-500 shrink-0 z-10
                        ${
                          isCompleted
                            ? "bg-indigo-500 text-white shadow-lg shadow-indigo-300 scale-105"
                            : isActive
                            ? "bg-white border-4 border-indigo-100 text-indigo-600 ring-2 ring-indigo-500 shadow-md"
                            : "bg-white border border-slate-200 text-slate-500"
                        }
                    `}
                  >
                    {isCompleted ? (
                      <FaCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                    ) : (
                      index + 1
                    )}
                  </div>

                  {/* Label (Optional tooltop or label below) */}
                  <span
                    className={`hidden sm:block absolute -bottom-6 text-[10px] font-bold tracking-wider
                        ${
                          isActive || isCompleted
                            ? "text-indigo-600"
                            : "text-slate-500"
                        }
                    `}
                  >
                    {step}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* Success Toast Animation */}
      {isSubmitted && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 animate-in slide-in-from-bottom-10 fade-in duration-500">
          <div className="px-6 py-3 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow-2xl shadow-emerald-200 flex items-center gap-2 backdrop-blur-md">
            <div className="bg-white/20 rounded-full p-1">
              <FaCheck size={10} />
            </div>
            Registration Successful!
          </div>
        </div>
      )}
    </main>
  );
}

export default MultiStepProgressForm;
