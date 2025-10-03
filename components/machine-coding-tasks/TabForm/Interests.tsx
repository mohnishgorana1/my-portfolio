import React from "react";

function Interests({ data, setData }: any) {
  const { interests } = data;
  const interestsToRender = [
    "music",
    "dance",
    "cricket",
    "travel",
    "boxing",
    "farming",
  ];

  const handleDataChange = (e: any, name: string) => {
    setData((prevData: any) => ({
      ...prevData,
      interests: e.target.checked
        ? [...prevData.interests, e.target.name] // agar checked kru to phle wala bhi sath me naya bhi
        : prevData.interests.filter((i: any) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <form className="gap-2 grid grid-cols-3">
        {interestsToRender.map((interest: string, idx: number) => (
          <div className="capitalize items-center flex" key={idx}>
            <input
              type="checkbox"
              className="w-5 h-5"
              onChange={(e) => handleDataChange(e, interest)}
              checked={data.interests.includes(interest)}
              name={interest}
            />
            <span className="ml-2">{interest}</span>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Interests;
