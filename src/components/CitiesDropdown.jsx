import { useState } from "react";

const CitiesDropdown = () => {
  const [city, setCity] = useState("Jakarta Pusat");

  return (
    <div className="flex justify-end mr-10">
      {/* Cities */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded-md mr-2 text-[12px] bg-white text-SMnavy font-semibold drop-shadow-2xl"
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
