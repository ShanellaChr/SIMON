import { useState } from "react";
import filterIcon from "../assets/filterIcon.svg";
import FilterTooltip from "./GeoFilterTooltip";

export default function GeoFilterButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-5 py-2 bg-SMnavy hover:bg-SMteal transition-colors text-SMcream rounded-md shadow"
      >
        <img src={filterIcon} alt="filter" width={18} height={18} />
        <span className="text-sm font-semibold">Add Filter</span>
      </button>

      {open && <FilterTooltip onClose={() => setOpen(false)} />}
    </div>
  );
}
