import { useState } from "react";

const MonthYearDropdown = () => {
  const [month, setMonth] = useState("October");
  const [year, setYear] = useState("2025");

  return (
    <div className="flex justify-end mr-10">
      {/* Month */}
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="p-2 rounded-l-md text-[12px] bg-SMaqua text-SMnavy font-semibold drop-shadow-2xl"
      >
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>

      {/* Year */}
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="p-2 rounded-r-md text-[12px] bg-SMaqua text-SMnavy font-semibold drop-shadow-2xl"
      >
        <option>2024</option>
        <option>2025</option>
        <option>2026</option>
      </select>
    </div>
  );
};

export default MonthYearDropdown;
