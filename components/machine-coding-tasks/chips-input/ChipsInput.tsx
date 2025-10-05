"use-client";
import { span } from "framer-motion/client";
import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
function ChipsInput() {
  const [data, setData] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setCurrentValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      if (currentValue.trim() === "") return;
      setData((prev) => {
        return [...prev, currentValue];
      });
      setCurrentValue("");
    }
  };
  const handleDelete = (itemToDelete: string) => {
    const newData = data.filter((oldValues) => oldValues !== itemToDelete);
    setData(newData);
  };

  return (
    <main className="min-h-72 grid md:grid-cols-2 gap-x-3 gap-y-3 mb-5">
      <div className="space-y-4 bg-neutral-900 px-4 py-2 lg:pt-4 pb-6 rounded-sm md:rounded-xl flex flex-col items-center gap-y-4">
        <div className="w-full flex flex-col  my-auto gap-y-4">
          <input
            type="text"
            className="bg-neutral-800 shadow-neutral-600 rounded-xl py-2 px-4 outline-none focus:ring-1 focus:ring-blue-300"
            value={currentValue}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
            placeholder="Type something and press Enter"
          />
          <span className="flex items-center flex-wrap gap-3">
            {data &&
              data.length > 0 &&
              data.map((item, idx) => (
                <p
                  className="rounded-xl px-3 text-center bg-neutral-800 flex items-center gap-x-4"
                  key={idx}
                >
                  <span>{item}</span>
                  <button
                    className="text-red-600 text-xl"
                    onClick={() => handleDelete(item)}
                  >
                    <MdCancel />
                  </button>
                </p>
              ))}
          </span>
          <button
            className="cursor-pointer px-4 py-1 rounded-3xl bg-blue-700 shadow-sm shadow-blue-600 w-28 self-center"
            onClick={() => setIsSubmitted(true)}
            disabled={data.length < 1}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="bg-neutral-900/55 px-4 py-2 lg:py-4 rounded-sm md:rounded-xl w-full flex flex-col ">
        <h1 className="text-xl md:text-2xl font-semibold mb-5 md:animate-pulse text-start md:text-center">
          Submitted Data
        </h1>
        <div className="w-full text-neutral-300 space-y-3 leading-relaxed text-xl">
          {isSubmitted && data.length > 0 ? (
            <p className="flex flex-col">
              <span>&#91;</span>
              <span className="ml-4 flex flex-col">
                {data.map((item) => (
                  <span className="ml-1">"{item}"</span>
                ))}
              </span>
              <span>&#93;</span>
            </p>
          ) : (
            <p>No Value Added</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default ChipsInput;
