import React from "react";

function Profile({ data, setData }: any) {
  const { name, age, email } = data;

  const handleDataChange = (e: any) => {
    setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-slate-800">Personal Info</h2>
        <p className="text-sm text-slate-400">Please provide your basic details.</p>
      </div>

      <form className="flex flex-col gap-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-slate-600 ml-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={handleDataChange}
            placeholder="e.g. John Doe"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-slate-700 placeholder:text-slate-300"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="age" className="text-sm font-bold text-slate-600 ml-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              name="age"
              onChange={handleDataChange}
              placeholder="25"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-slate-700 placeholder:text-slate-300"
              required
            />
          </div>
          <div className="space-y-2">
             {/* Spacer or another field could go here */}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-slate-600 ml-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleDataChange}
            placeholder="john@example.com"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all text-slate-700 placeholder:text-slate-300"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;