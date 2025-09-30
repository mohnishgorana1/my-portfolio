import React from "react";

function Profile({ data, setData }: any) {
  const { name, age, email } = data;

  const handleDataChange = (e: any) => {
    setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <form className="flex flex-col gap-y-5 text-lg">
        <div className="w-full grid grid-cols-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={handleDataChange}
            className="px-2 rounded-sm bg-neutral-950 col-span-2"
            required
          />
        </div>
        <div className="w-full grid grid-cols-3">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            name="age"
            onChange={handleDataChange}
            className="px-2 rounded-sm bg-neutral-950 col-span-2"
            required
          />
        </div>
        <div className="w-full grid grid-cols-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleDataChange}
            className="px-2 rounded-sm bg-neutral-950 col-span-2"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
