import { Province_Data } from "../data/provinceData";

const ALL_CITIES = Object.values(Province_Data).flat();

const CitiesDropdown = ({
  value,
  onSelectCityProvRec,
  className = "flex justify-end mr-10",
}) => {
  return (
    <div className={className}>
      <select
        value={value}
        onChange={(e) => onSelectCityProvRec(e.target.value)}
        className="p-2 rounded-md mr-2 text-[12px] bg-white text-SMnavy font-semibold border border-gray-200"
      >
        <option value="" disabled>
          City
        </option>

        {ALL_CITIES.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitiesDropdown;
