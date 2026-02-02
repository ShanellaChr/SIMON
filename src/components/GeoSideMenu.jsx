import { useState } from "react";
import { Province_Data } from "../data/provinceData";

export default function GeoSideMenu({ onSelectProvince, onSelectCity }) {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="flex border border-gray-200 rounded-md overflow-hidden bg-white">
      {/* PROVINCE */}
      <div className="w-50 border-r">
        <div className="px-2 py-2 font-bold text-center text-SMnavy">
          Province
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {Object.keys(Province_Data).map((province) => (
            <button
              key={province}
              onClick={() => {
                setSelectedProvince(province);
                setSelectedCity(null);
                onSelectProvince?.(province);
              }}
              className={`w-full text-left px-2 py-2 text-[12px] border-b
                ${selectedProvince === province
                  ? "bg-SMaqua font-semibold"
                  : "hover:bg-gray-100"}`}
            >
              {province}
            </button>
          ))}
        </div>
      </div>

      {/* CITY */}
      {selectedProvince && (
        <div className="w-50 border-r">
          <div className="px-2 py-2 font-bold text-SMnavy text-center">
            {selectedProvince}
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {Province_Data[selectedProvince].map((city) => (
              <button
                key={city}
                onClick={() => {
                  setSelectedCity(city);
                  onSelectCity?.(city);
                }}
                className={`w-full text-left px-2 py-2 text-[12px] border-b
                  ${selectedCity === city
                    ? "bg-SMnavy text-SMcream"
                    : "hover:bg-gray-100"}`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
