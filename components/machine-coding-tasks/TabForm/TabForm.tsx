"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNext = () => {
    setActiveTab((prev) => prev + 1);
  };
  const handlePrev = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleSubmit = () => {
    console.log("data", formData);
  };

  return (
    <main className="w-full min-h-full md:min-h-[50vh] bg-neutral-900 px-4 py-4 rounded-md grid md:items-center md:grid-cols-3">
      <h1 className="hidden md:flex text-3xl md:col-span-1">Tab Form</h1>
      <h1 className="md:hidden mb-5 text-3xl md:col-span-1 border-b md:border-b-0 border-b-neutral-400 pb-2 ">
        Tab Form
      </h1>
      <div className="h-full md:col-span-1  md:border-l border-l-neutral-600 px-5 space-y-4 ">
        <section className="flex">
          {tabs.map((tab, idx) => (
            <Button
              key={idx}
              className={`text-xl ${
                activeTab === idx && "bg-slate-950 ease-linear"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.name}
            </Button>
          ))}
        </section>

        <section className="bg-neutral-700 rounded-sm p-3">
          <ActiveTabComponent data={formData} setData={setFormData} />
        </section>

        <div className="mx-auto flex flex-row gap-y-2 gap-x-2 items-center">
          {activeTab > 0 && (
            <Button className="bg-blue-600 w-36 md:w-48" onClick={handlePrev}>
              Prev
            </Button>
          )}
          {activeTab < tabs.length - 1 && (
            <Button className="bg-blue-600 w-36 md:w-48" onClick={handleNext}>
              Next
            </Button>
          )}
          {activeTab === tabs.length - 1 && (
            <Button
              className="bg-green-600 w-36 md:w-48"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
      <div className="my-3 md:my-0 md:col-span-1 border-t border-t-neutral-400 md:border-t-0 md:border-l border-l-neutral-400 px-5 py-2 space-y-4 ">
        <h1 className="font-bold text-lg text-center">Submission Details</h1>
        <div className="space-y-3">
          <article className="flex items-center gap-x-5">
            <span className="font-bold">Name: </span>
            <p className="">{formData.name}</p>
          </article>
          <article className="flex items-center gap-x-5">
            <span className="font-bold">Age: </span>
            <p className="">{formData.age}</p>
          </article>
          <article className="flex items-center gap-x-5">
            <span className="font-bold">Email: </span>
            <p className="">{formData.email}</p>
          </article>
          <article className="flex gap-x-5">
            <span className="font-bold">Interests: </span>
            <div className="flex flex-wrap gap-2 ">
              {formData.interests &&
                formData.interests.length &&
                formData.interests.map((i) => (
                  <span className="py-1 px-3 text-xs rounded-full bg-slate-600">
                    {i}
                  </span>
                ))}
            </div>
          </article>
          <article className="flex items-center gap-x-5">
            <span className="font-bold">Theme: </span>
            <p className="capitalize">{formData.theme}</p>
          </article>
        </div>
      </div>
    </main>
  );
}

export default TabForm;
