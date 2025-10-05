"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const FORM_STEPS = ["PERSONAL", "EDUCATION", "ADDRESS"] as const;
type FormStep = (typeof FORM_STEPS)[number];

function MultiStepProgressForm() {
  const [currentActiveForm, setCurrentActiveForm] =
    useState<FormStep>("PERSONAL");
  // 1. New state to track submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    const currentIndex = FORM_STEPS.indexOf(currentActiveForm);
    if (currentIndex < FORM_STEPS.length - 1) {
      setCurrentActiveForm(FORM_STEPS[currentIndex + 1]);
    }
  };

  // Function to handle the final form submission
  const handleSubmit = () => {
    // In a real application, you would send the data to a server here.
    console.log("Form submitted successfully!");
    setIsSubmitted(true);
  };

  const isStepCompleted = (step: FormStep) => {
    const currentStepIndex = FORM_STEPS.indexOf(currentActiveForm);
    const stepIndex = FORM_STEPS.indexOf(step);
    // A step is completed if its index is less than the current active step's index
    return stepIndex < currentStepIndex;
  };

  const isStepActive = (step: FormStep) => {
    return step === currentActiveForm;
  };

  return (
    <main className="flex flex-col gap-y-8 text-white">
      <h1 className="font-bold text-lg md:text-xl text-center text-indigo-500 ">
        Multi-Step <br className="md:hidden" /> Progress Form
        <span className="ml-1 text-xs text-neutral-700 md:hidden">
          *Desktop Friendly*
        </span>
      </h1>

      {/* --- FORM CONTENT SECTION ----- */}
      <section className="mx-auto w-[80vw] sm:[50vw] lg:w-[40vw]">
        {/* Step 1: Personal */}
        <div
          className={`${
            currentActiveForm !== "PERSONAL" && "hidden"
          } flex flex-col gap-y-2 p-3 rounded-lg shadow-sm shadow-neutral-600 bg-neutral-900`}
        >
          <h2 className="font-semibold text-indigo-400">
            Step 1: Personal Information
          </h2>
          <input
            type="text"
            placeholder="Full Name"
            className="md:ml-2 rounded-xl px-3 py-1.5 bg-neutral-800 outline-none focus:ring-1 focus:ring-600 text-sm md:text-base text-gray-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="md:ml-2 rounded-xl px-3 py-1.5 bg-neutral-800 outline-none focus:ring-1 focus:ring-600 text-sm md:text-base text-gray-200"
          />
          <button
            onClick={handleNext}
            className="my-2 bg-indigo-700 hover:bg-indigo-800 transition-all rounded-lg font-medium self-center px-5 py-1.5"
          >
            Save & Continue
          </button>
        </div>

        {/* Step 2: Education */}
        <div
          className={`${
            currentActiveForm !== "EDUCATION" && "hidden"
          } flex flex-col gap-y-2 p-3 rounded-lg shadow-sm shadow-neutral-600 bg-neutral-900`}
        >
          <h2 className="font-semibold text-indigo-400">
            Step 2: Educational Background
          </h2>
          <input
            type="text"
            placeholder="Highest Qualification"
            className="md:ml-2 rounded-xl px-3 py-1.5 bg-neutral-800 outline-none focus:ring-1 focus:ring-600 text-sm md:text-base text-gray-200"
          />
          <input
            type="text"
            placeholder="University / Institute Name"
            className="md:ml-2 rounded-xl px-3 py-1.5 bg-neutral-800 outline-none focus:ring-1 focus:ring-600 text-sm md:text-base text-gray-200"
          />
          <button
            onClick={handleNext}
            className="my-2 bg-indigo-700 hover:bg-indigo-800 transition-all rounded-lg font-medium self-center px-5 py-1.5"
          >
            Save & Continue
          </button>
        </div>

        {/* Step 3: Address */}
        <div
          className={`${
            currentActiveForm !== "ADDRESS" && "hidden"
          } flex flex-col gap-y-2 p-3 rounded-lg shadow-sm shadow-neutral-600 bg-neutral-900`}
        >
          <h2 className="font-semibold text-indigo-400">
            Step 3: Address Details
          </h2>
          <input
            type="text"
            placeholder="City / District"
            className="md:ml-2 rounded-xl px-3 py-1.5 bg-neutral-800 outline-none focus:ring-1 focus:ring-600 text-sm md:text-base text-gray-200"
          />
          <input
            type="text"
            placeholder="State / Province"
            className="md:ml-2 rounded-xl px-3 py-1.5 bg-neutral-800 outline-none focus:ring-1 focus:ring-600 text-sm md:text-base text-gray-200"
          />
          {/* 💡 Submission Button Logic */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className={`w-full my-2 transition-all rounded-lg font-medium self-center px-5 py-1.5
              flex items-center justify-center space-x-2
              ${
                isSubmitted
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800"
              }`}
          >
            {isSubmitted ? (
              <>
                <FaCheck className="h-4 w-4" />
                <span>Submitted Successfully!</span>
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>
        </div>
      </section>

      {/* PROGRESS INDICATOR SECTION */}
      <section className="mx-auto w-[80vw] sm:[50vw] lg:w-[40vw]">
        <div className="flex w-full items-center justify-between px-2 md:px-6">
          {FORM_STEPS.map((step, index) => {
            const isCompleted = isStepCompleted(step) || isSubmitted; // Consider all steps complete if form is submitted
            const isActive = isStepActive(step) && !isSubmitted; // Step is only active if form isn't submitted

            return (
              <React.Fragment key={step}>
                {/* Connector Line (Render before step 2 and 3) */}
                {index > 0 && (
                  <div
                    className={`flex-1 mx-2 h-0.5 transition-colors duration-500 ${
                      isCompleted ? "bg-indigo-500" : "bg-neutral-600"
                    }`}
                  ></div>
                )}

                {/* Step Circle/Button */}
                <div
                  className={`
                    rounded-full h-8 w-8 flex items-center justify-center 
                    text-sm font-semibold transition-all duration-500 shrink-0
                    ${
                      isCompleted // Completed Step
                        ? "bg-indigo-500 text-white"
                        : isActive // Active Step
                        ? "bg-indigo-700 border-2 border-indigo-500 text-white"
                        : "bg-neutral-700 border border-neutral-600 text-neutral-400" // Inactive Step
                    }
                  `}
                >
                  {/* Display checkmark if completed or submitted, otherwise display step number */}
                  {isCompleted ? <FaCheck className="h-3 w-3" /> : index + 1}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {isSubmitted && (
        <div className="mx-auto mt-4 p-1 px-2 rounded-lg bg-indigo-800 text-white text-sm text-center shadow-lg transition-all duration-500 flex items-center gap-x-1.5">
          <FaCheck />
          Submission Successfully
        </div>
      )}
    </main>
  );
}

export default MultiStepProgressForm;
