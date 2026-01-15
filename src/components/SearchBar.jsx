'use client';
import searchIcon from "../assets/searchIcon.svg";

export default function SearchBar({ value, onChange, onSearch, className }) {
  const defaultClasses = "flex items-center rounded-md overflow-hidden bg-white shadow-[0_2px_5px_rgba(0,0,0,0.07),inset_0_1px_3px_rgba(0,0,0,0.15)]";
  const finalClassName = className || "w-[420px]";
  return (
    <div className={`${defaultClasses} ${finalClassName}`}>
      <input
        type="text"
        placeholder="Search by ICCID / MSISDN / IMEI"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 px-4 py-3 text-sm bg-transparent focus:outline-none text-SMnavy placeholder:text-gray-400"
      />

      <button onClick={onSearch} className="flex items-center justify-center px-5 py-3 bg-SMnavy hover:bg-SMteal transition-colors" >
        <img src={searchIcon} alt="search" className="w-[18px] h-[18px]" />
      </button>
    </div>
  );
}
