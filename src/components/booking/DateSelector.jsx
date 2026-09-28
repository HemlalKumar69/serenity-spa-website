import { CalendarDays } from "lucide-react";

const DateSelector = ({ selectedDate, onDateChange }) => {
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-800">
        Select Date
      </label>

      <div className="relative">
        <CalendarDays
          size={19}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700"
        />

        <input
          type="date"
          value={selectedDate}
          min={minDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-sm text-gray-700 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        />
      </div>
    </div>
  );
};

export default DateSelector;