import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const ACCORDIAN_DATA = [
  {
    id: 1,
    name: "HTML",
    content:
      "HTML (HyperText Markup Language) is the backbone of all web pages. It provides the structure of a webpage using a series of elements and tags. With HTML, you can define headings, paragraphs, links, images, lists, and forms. It is the first step in web development and works closely with CSS and JavaScript to create interactive, well-styled pages.",
  },
  {
    id: 2,
    name: "CSS",
    content:
      "CSS (Cascading Style Sheets) is used to style and visually enhance HTML elements. It controls the layout, colors, fonts, and spacing of your webpage. Modern CSS includes features like Flexbox, Grid, and animations that allow developers to build responsive and dynamic designs without relying heavily on JavaScript. It helps bring a polished, professional look to websites.",
  },
  {
    id: 3,
    name: "JavaScript",
    content:
      "JavaScript is a powerful scripting language that brings interactivity to web pages. It allows you to respond to user actions, manipulate the DOM, fetch data from APIs, and build complex functionalities like sliders, modals, and games. With ES6 and beyond, JavaScript has evolved into a robust language used not just for frontend development but also on the server side through Node.js.",
  },
  {
    id: 4,
    name: "React",
    content:
      "React is a popular JavaScript library for building fast, component-based user interfaces. Developed by Meta, it uses a virtual DOM to efficiently update and render components. React encourages reusable UI elements, making development faster and more organized. It integrates well with tools like Next.js and frameworks for state management such as Redux or Zustand.",
  },
  {
    id: 5,
    name: "Node.js",
    content:
      "Node.js is a runtime environment that allows JavaScript to run on the server. It is built on Chrome’s V8 engine and is widely used for creating scalable backend applications and APIs. With its non-blocking I/O model and event-driven architecture, Node.js enables efficient handling of multiple requests, making it ideal for real-time applications like chat apps and streaming services.",
  },
];

function Accordian() {
  const [data, setData] = useState(ACCORDIAN_DATA);
  const [currentOpenAccoridan, setCurrentOpenAccoridan] = useState<
    null | number
  >(1);

  const handleAccordian = (itemId: number) => {
    if (currentOpenAccoridan === itemId) {
      setCurrentOpenAccoridan(null);
      return;
    }
    setCurrentOpenAccoridan(itemId);
  };

  return (
    <main className="min-h-72 gap-x-3 gap-y-3 mb-5">
      <div className="min-h-56 px-2 py-2 lg:pt-4 rounded-sm md:rounded-xl flex flex-col gap-y-1">
        {data.map((item) => (
          <div
            key={item.id}
            className="space-y-2 my-1 bg-neutral-800 px-4 py-3 rounded-md "
          >
            <section
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleAccordian(item.id)}
            >
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <button
                className={`${
                  currentOpenAccoridan === item.id && "rotate-180 "
                } duration-500`}
                onClick={() => handleAccordian(item.id)}
              >
                <FaAngleDown />
              </button>
            </section>
            {currentOpenAccoridan === item.id && (
              <section className="">
                <p className="text-xs pt-2 font-bold text-gray-500 border-t border-t-neutral-700/70">
                  {item.content}
                </p>
              </section>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Accordian;
