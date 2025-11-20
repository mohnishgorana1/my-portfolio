import { cn } from "@/lib/utils";

export const AcademicCard = ({
  title,
  board,
  institutions,
  institutionLocation,
  year,
  result,
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
        `w-full bg-gradient-to-br from-white/30 via-white/10 to-white/5 backdrop-blur-2xl rounded-2xl border border-white/25 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_45px_rgba(0,0,0,0.18)] hover:scale-[1.02] transition-all duration-300 p-6`
      )}
    >
      <div className="md:grid md:grid-cols-5 justify-between items-center">
        <div className="md:col-span-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">
            {institutions}, {institutionLocation}
          </p>
          <p className="text-gray-800">{result}</p>
        </div>

        <div className="md:col-span-1 text-right md:text-left space-y-1">
          <p className="text-sm font-semibold text-gray-900">{board}</p>
          <p className="text-sm text-gray-700">{year}</p>
        </div>
      </div>
    </div>
  );
};
