import { useState } from "react";

/**
 * CitiesDropdown
 * @param {object} props
 * @param {string} props.className
 */
const CitiesDropdown = ({ className = "flex justify-end mr-10" }) => {
  const [city, setCity] = useState("Jakarta Pusat");

  return (
    <div className={className}>
      {/* Cities */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded-md mr-2 text-[12px] bg-white text-SMnavy font-semibold border border-gray-200"
      >
        <option>Jakarta Pusat</option>
        <option>Jakarta Utara</option>
        <option>Jakarta Selatan</option>
        <option>Jakarta Barat</option>
        <option>Jakarta Timur</option>
      </select>
    </div>
  );
};

export default CitiesDropdown;
