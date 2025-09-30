import React from "react";

function Settings({ data, setData }: any) {
  const { theme } = data;
  const handleDataChange = (e: any) => {
    setData((prev: any) => ({ ...prev, theme: e.target.name }));
  };
  return (
    <div>
      <form className="flex flex-col gap-y-5 text-lg">
        <label htmlFor="dark">
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleDataChange}
          />
          <span className="ml-1">Dark</span>
        </label>
        <label htmlFor="light">
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleDataChange}
          />
          <span className="ml-1">Light</span>
        </label>
      </form>
    </div>
  );
}

export default Settings;
