export default function FilterTooltip({ onClose }) {
  return (
    <div className="absolute top-14 right-0 w-[340px] bg-SMaqua rounded-lg shadow-lg p-4 z-1">

      {/* PROVIDER */}
      <div className="mb-3">
        <p className="font-semibold text-SMnavy mb-1">Provider</p>
        <div className="flex flex-row flex-nowrap gap-3 text-sm">
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Telkomsel</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> XL Axiata</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Indosat</label>
        </div>
      </div>

      <hr className="my-2" />

      {/* BILLING STATUS */}
      <div className="mb-3">
        <p className="font-semibold text-SMnavy mb-1">Billing Status</p>
        <div className="flex flex-row flex-nowrap gap-3 text-sm">
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> In-Billing</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> In-Testing</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Suspended</label>
        </div>
      </div>

      <hr className="my-2" />

      {/* SESSION STATUS */}
      <div className="mb-3">
        <p className="font-semibold text-SMnavy mb-1">Session Status</p>
        <div className="flex flex-row gap-3 text-sm">
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Online</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Offline</label>
        </div>
      </div>

      <hr className="my-2" />

      {/* SIGNAL */}
      <div className="mb-4">
        <p className="font-semibold text-SMnavy mb-1">Signal Strength</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Excellent</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Good</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Moderate</label>
          <label className="flex items-center gap-2 whitespace-nowrap"><input type="checkbox" /> Poor</label>
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
