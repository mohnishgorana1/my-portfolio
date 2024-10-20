import { cn } from "@/lib/utils";

export const AcademicCard = ({
  title,
  board,
  institutions,
  institutionLocation,
  year,
  result
}: {
  title: string;
  board: string;
  institutions: string;
  institutionLocation: string;
  year: string;
  result: string;
}) => {
  return (
    <div
      className={cn(
        "w-full bg-neutral-950 text-white p-6 rounded-lg shadow-md shadow-neutral-700 hover:scale-105 duration-300"
      )}
    >
      <div className="md:grid md:grid-cols-5 justify-between items-center">
        <div className="md:col-span-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-400">
            {institutions}, {institutionLocation}
          </p>
          <p className="text-gray-300">{result}</p>
        </div>
        <div className="md:col-span-1 text-right md:text-left space-y-1">
          <p className="text-sm font-semibold">{board}</p>
          <p className="text-sm">{year}</p>
        </div>
      </div>
    </div>
  );
};
