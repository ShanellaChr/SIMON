import { useState } from "react";
import Heatmap from "../components/charts/heatmap";
import SIMCardHeadUnit from "../components/GeolocationHeadUnit";
import GeoSideMenu from "../components/GeoSideMenu";
import Backdrop from "./Backdrop";
import CitiesDropdown from "./CitiesDropdown";
import BarChartAvgSignalComparison from "./charts/BarChartAvgSignalComparison";


// Data Dummy Head Unit
const headData = {
  "Avg. Signal": "- 90 dBm",
  "Area Signal": "85%",
  "Top Provider": "Telkomsel",
  "Worst City": "Cibitung / XL",
};

// Dummy heatmap data per province
const HEATMAP_BY_PROVINCE = {
  "Jawa Barat": {
    columns: [
      "Kab. Bandung",
      "Kota Bandung",
      "Cimahi",
      "Garut",
      "Tasikmalaya",
      "Cianjur",
    ],
  },
};

const rows = [
  {
    label: "Telkomsel",
    cells: [
      { value: -99, status: "excellent" },
      { value: -108, status: "poor" },
      { value: -92, status: "moderate" },
      { value: -99, status: "excellent" },
      { value: -89, status: "excellent" },
      { value: -89, status: "excellent" },
    ],
  },
  {
    label: "XL Axiata",
    cells: [
      { value: -103, status: "poor" },
      { value: -95, status: "moderate" },
      { value: -99, status: "excellent" },
      { value: -78, status: "excellent" },
      { value: -97, status: "moderate" },
      { value: -97, status: "moderate" },
    ],
  },
  {
    label: "Indosat",
    cells: [
      { value: -96, status: "moderate" },
      { value: -95, status: "moderate" },
      { value: -103, status: "poor" },
      { value: -101, status: "poor" },
      { value: -101, status: "poor" },
      { value: -88, status: "excellent" },
    ],
  },
];

const dataChart = [
  {
        name: "Avg. Signal",
        Telkomsel: 99,
        XL: 92.78,
        Indosat: 97.89,
    },
];


export default function GeoLocationWidget() {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const breadcrumb = selectedCity
    ? `${selectedProvince} > ${selectedCity}`
    : selectedProvince
      ? selectedProvince
      : "Regional Network Health";

  return (
    <div className="p-4">
      <SIMCardHeadUnit data={headData} />

      <Backdrop className="mt-4 pt-0.5 flex gap-4">
        {/* Side Menu */}
        <GeoSideMenu
          onSelectProvince={(prov) => {
            setSelectedProvince(prov);
            setSelectedCity(null);
          }}
          onSelectCity={(city) => setSelectedCity(city)}
        />
        {/* Isi */}
        <div className="flex-1 bg-white rounded-md p-4">
          <div className="text-sm font-semibold text-SMnavy mb-3">
            {breadcrumb}
          </div>

          {/* CASE 1: CITY SELECTED */}
          {selectedCity ? (
            <div className="h-[300px] bg-red-200 border-red-500 rounded-md flex items-center justify-center">
              <span className="font-semibold text-red-700">
                City Widget Placeholder
              </span>
            </div>
          ) : (
            /* CASE 2: PROVINCE SELECTED */
            selectedProvince && (
              <Heatmap
                columns={
                  HEATMAP_BY_PROVINCE[selectedProvince]?.columns || []
                }
                rows={rows}
              />
            )
          )}
        </div>
      </Backdrop>
      <div className="flex justify-center gap-4 mt-4">
        <Backdrop className="w-150 flex flex-col">
          <div className="flex justify-center">
            <h1 className="font-bold text-[18px] mt-1">Provider Recommendation</h1>
          </div>

          <div className="px-2 space-y-1 mb-1">
              <h3 className="font-semibold text-SMteal text-[14px]">Choose Location</h3>
              <CitiesDropdown className="mb-2 " />
              <hr />
            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">Result</h3>
              <div className="space-y-1">
                <div className="flex items-start text-[14px]">
                  <span className="w-50 text-left pr-2">City</span>
                  <span className="w-4 text-center text-SMteal">:</span>
                  <span className="flex-1 text-[14px] pl-2">{selectedCity || "None"}</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-50 text-left pr-2">Best Provider</span>
                  <span className="w-4 text-center">:</span>
                  <span className="flex-1 text-[14px] pl-2">Telkomsel</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-50 text-left pr-2">Avg. Signal Strength</span>
                  <span className="w-4 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-92 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-50 text-left  pr-2">Alternative</span>
                  <span className="w-4 text-center">:</span>
                  <span className="flex-1 text-[14px] pl-2">XL Axiata (-88 dBm)</span>
                </div>
              </div>
            </div>
          </div>
        </Backdrop>
        <Backdrop className="w-150 flex flex-col">
          <div className="flex justify-center">
            <h1 className="font-bold text-[18px] mt-1">Location (Signal Issues)</h1>
          </div>

          <div className="flex justify-center px-2 space-y-1 mb-1">
              <div className="space-y-1">
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">1. Makassar (Indosat)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-101 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">2. Denpasar (Indosat)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-107 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">3. Semarang (XL Axiata)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-105 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">4. Bogor (Telkomsel)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-101 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">5. Bekasi (Indosat)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-100 dBm</span>
                </div>
              </div>
          </div>

          <div className="flex justify-center">
            <h1 className="font-bold text-[18px] mt-1">Location (Signal Top)</h1>
          </div>

          <div className="flex justify-center px-2 space-y-1 mb-1">
              <div className="space-y-1">
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">1. Jakarta Pusat (Telkomsel)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-81 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">2. Denpasar (Indosat)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-83 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">3. Semarang (XL Axiata)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-84 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">4. Bogor (Telkomsel)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-87 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-65 text-left pr-2">5. Tangerang Kota (Indosat)</span>
                  <span className="w-8 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-88 dBm</span>
                </div>
              </div>
          </div>
        </Backdrop>
        <Backdrop className="w-150 flex flex-col">
          <div className="flex justify-center">
            <h1 className="font-bold text-[18px] mt-1">Provider Signal Comparison</h1>
          </div>
          <div className="px-2 space-y-1 mb-1">
              <h3 className="font-semibold text-SMteal text-[14px]">Choose Location</h3>
              <CitiesDropdown className="mb-2 " />
              <BarChartAvgSignalComparison data={dataChart} />
          </div>
        </Backdrop>
      </div>

    </div>
  );
}