import SearchBar from "../components/SearchBar";
import GeoFilterButton from "../components/GeoFilterButton";
import { useState } from "react";

export default function GeoFencingWidget() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };
  return (
    <div className="p-2">
      <h2 className="font-bold text-[16px] mb-1">Detail SIM Card</h2>
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT INFO */}
        <div className="col-span-3">
          <div className="space-y-1">
            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">ICCID</h3>
              <p className="text-[14px] font-medium">89620100001416613780</p>
              <hr />
            </div>

            <div className="flex flex-row gap-10">
              <div>
                <h3 className="font-semibold text-SMteal text-[14px]">MSISDN</h3>
                <p className="text-[14px] font-medium">6281431226901</p>
              </div>

              <div>
                <h3 className="font-semibold text-SMteal text-[14px]">IMEI</h3>
                <p className="text-[14px] font-medium">3596667961951801</p>
              </div>
            </div>
            <hr />

            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">Terminal ID</h3>
              <p className="text-[14px] font-medium">TRM-9876543210</p>
              <hr />
            </div>

            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">Assigned Branch</h3>
              <p className="text-[14px] font-medium">Kantor Pusat</p>
              <hr />
            </div>

            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">Geofence Zone</h3>
              <p className="text-[14px] font-medium">Jakarta Pusat</p>
              <hr />
            </div>

            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">Current Location</h3>
              <p className="text-[14px] font-medium">Jl. MH Thamrin No. 1, Jakarta Pusat</p>
              <p className="text-[14px] font-medium">Latitude: -6.196618</p>
              <p className="text-[14px] font-medium">Longitude: 106.8222431</p>
              <hr />
            </div>

            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">Geofence Status</h3>
              <p className="text-[14px] font-medium">Within Zone</p>
              <hr />
            </div>

            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">Last Updated</h3>
              <p className="text-[14px] font-medium">2023-10-27 10:30</p>
            </div>
          </div>
        </div>
        {/* MAP PLACEHOLDER */}
        <div className="col-span-9 border rounded-md flex items-center justify-center text-red-700">
          MAP (Geofence Area)
        </div>
      </div>
      <div className="mt-2 flex flex-row gap-3">
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
          className="w-[400px]"></SearchBar>
        <GeoFilterButton></GeoFilterButton>
      </div>
      
    </div>
  );
}
