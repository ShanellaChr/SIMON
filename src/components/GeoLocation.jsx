import { useState } from "react";
import Heatmap from "../components/charts/heatmap";
import SIMCardHeadUnit from "../components/GeolocationHeadUnit";
import GeoSideMenu from "../components/GeoSideMenu";
import Backdrop from "./Backdrop";


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

      <Backdrop className="mt-4 flex gap-4">
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
    </div>
  );
}