import { Clock3 } from "lucide-react";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const TimeSelector = ({ selectedTime, onTimeChange }) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-gray-800">
        Select Time
      </label>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {timeSlots.map((time) => {
          const isSelected = selectedTime === time;

          return (
            <button
              key={time}
              type="button"
              onClick={() => onTimeChange(time)}
              className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition ${
                isSelected
                  ? "border-emerald-700 bg-emerald-700 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-emerald-600 hover:text-emerald-700"
              }`}
            >
              <Clock3 size={16} />
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelector;