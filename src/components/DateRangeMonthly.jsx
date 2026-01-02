import { useState } from "react";

export default function DateRangeMonthly({ onSubmit }) {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }).map((_, i) => String(currentYear - i));

    const [year, setYear] = useState(String(currentYear));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof onSubmit === "function") onSubmit({ year });
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <label className="text-[14px] font-semibold">Year</label>
            <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="border rounded-md border-gray-200 p-1 text-[12px] font-semibold"
            >
                {years.map((y) => (
                    <option key={y} value={y}>
                        {y}
                    </option>
                ))}
            </select>

            <button
                type="submit"
                className="ml-2 px-4 py-1 text-[12px] bg-SMnavy text-SMcream rounded-md border"
            >
                Submit
            </button>
        </form>
    );
}
