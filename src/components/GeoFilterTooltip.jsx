import CitiesDropdown from "./CitiesDropdown";

export default function FilterTooltip({ onClose }) {
  return (
    <div className="absolute top-14 right-0 w-[365px] bg-SMaqua rounded-lg shadow-lg p-4 z-1">

      {/* Geofence Status */}
      <div className="mb-3">
        <p className="font-semibold text-SMnavy mb-1">Geofence Status</p>
        <div className="flex flex-row flex-nowrap gap-3 text-sm">
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Within Zone</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Outside Zone</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Unknown</label>
        </div>
      </div>

      <hr className="my-2" />

      {/* Alert Status */}
      <div className="mb-3">
        <p className="font-semibold text-SMnavy mb-1">Alert Status</p>
        <div className="flex flex-row flex-nowrap gap-3 text-sm">
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Active Alert</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> No Alert</label>
        </div>
      </div>

      <hr className="my-2" />

      {/* Location Assigned */}
      <div className="mb-3">
        <p className="font-semibold text-SMnavy mb-1">Location Assigned</p>
        <div className="flex flex-row gap-3 text-sm">
            <CitiesDropdown></CitiesDropdown>
        </div>
      </div>



      <div className="flex justify-center">
        <button onClick={onClose} className="w-[120px] py-2 bg-SMnavy text-white rounded-md text-sm hover:bg-SMteal transition">
          Clear Filters
        </button>
      </div>

    </div>
  );
}
