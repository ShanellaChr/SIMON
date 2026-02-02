import { useState } from "react";
import Heatmap from "../components/charts/heatmap";
import SIMCardHeadUnit from "../components/GeolocationHeadUnit";
import GeoSideMenu from "../components/GeoSideMenu";
import Backdrop from "./Backdrop";
import CitiesDropdown from "./CitiesDropdown";
import BarChartAvgSignalComparison from "./charts/BarChartAvgSignalComparison";
import AvgSignalHorizontalChart from "./charts/BarChartAvgSignalComparison";
import { Province_Data } from "../data/provinceData";


// Data Dummy Head Unit
const headData = {
  "Avg. Signal": "- 90 dBm",
  "Area Signal": "85%",
  "Top Provider": "Telkomsel",
  "Worst City": "Cibitung / XL",
};

const dataChart = [
  {
    name: "Avg. Signal",
    Telkomsel: 99,
    XL: 92.78,
    Indosat: 97.89,
  },
];


export default function GeoLocationWidget() {
  const DEFAULT_PROVINCE = "Jabodetabek";
  const [selectedProvince, setSelectedProvince] = useState(DEFAULT_PROVINCE);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCityProvRec, setSelectedCityProvRec] = useState(null);
  const breadcrumbItems = [
    {
      label: selectedProvince,
      onClick: () => {
        setSelectedProvince(selectedProvince);
        setSelectedCity(null);
      },
    },
  ];

  if (selectedCity) {
    breadcrumbItems.push({
      label: selectedCity,
      onClick: () => {
        setSelectedCity(selectedCity);
      },
    });
  }


  const chunkColumns = (cols, size = 12, maxChunks = 10) => {
    const chunks = [];
    for (let i = 0; i < cols.length && chunks.length < maxChunks; i += size) {
      chunks.push(cols.slice(i, i + size));
    }
    return chunks;
  };

  const staticRows = (cols) => {
    const providers = [
      { label: "Telkomsel", values: [-81, -92, -101] },
      { label: "XL Axiata", values: [-85, -95, -103] },
      { label: "Indosat", values: [-83, -100, -107] },
    ];
    return providers.map((p) => ({
      label: p.label,
      cells: cols.map((_, i) => {
        const v = p.values[i % p.values.length];
        const status = v > -90 ? "excellent" : v > -100 ? "moderate" : "poor";
        return { value: v, status };
      }),
    }));
  };

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
          <div className="flex items-center text-[10px] font-medium text-SMnavy mb-3 gap-1">
            {breadcrumbItems.map((item, idx) => {
              const isLast = idx === breadcrumbItems.length - 1;

              return (
                <span key={idx} className="flex items-center gap-1">
                  <span
                    onClick={!isLast ? item.onClick : undefined}
                    className={
                      isLast
                        ? "font-semibold cursor-default"
                        : "cursor-pointer hover:underline"
                    }
                  >
                    {item.label}
                  </span>
                  {!isLast && <span>{">"}</span>}
                </span>
              );
            })}
          </div>



          {/* CASE 1: CITY SELECTED */}
          {selectedCity ? (
            <div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Regional Network Health</h1>
                <h3 className="text-SMteal font-semibold">{selectedCity}</h3>
              </div>
              <div className="flex flex-row mt-4 gap-4">
                <AvgSignalHorizontalChart data={dataChart} />
                <Backdrop className="w-150 h-40 flex flex-col">
                  <div className="flex justify-center">
                    <h1 className="font-bold text-[12px] mt-1">Summary</h1>
                  </div>
                  <div className="px-2 space-y-1 mb-1">
                    <h3 className="font-semibold text-SMteal text-[12px]">SIM Cards Count</h3>
                    <div>
                      <div className="space-y-1">
                        <div className="flex items-start text-[12px] font-semibold">
                          <span className="w-40 text-left pr-2">Total Count</span>
                          <span className="w-4 text-center text-SMteal">:</span>
                          <span className="flex-1 pl-2">255</span>
                        </div>
                        <hr />
                        <div className="flex items-start text-[12px]">
                          <span className="w-40 text-left pr-2">Telkomsel</span>
                          <span className="w-4 text-center">:</span>
                          <span className="flex-1 pl-2">120</span>
                        </div>
                        <div className="flex items-start text-[12px]">
                          <span className="w-40 text-left pr-2">XL Axiata</span>
                          <span className="w-4 text-center ">:</span>
                          <span className="flex-1 pl-2">100</span>
                        </div>
                        <div className="flex items-start text-[12px]">
                          <span className="w-40 text-left  pr-2">Indosat</span>
                          <span className="w-4 text-center">:</span>
                          <span className="flex-1 pl-2">35</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Backdrop>
              </div>
            </div>
          ) : selectedProvince ? (
            <div className="space-y-2">
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Regional Network Health</h1>
                <h3 className="text-SMteal font-semibold">{selectedProvince}</h3>
              </div>
              {chunkColumns(Province_Data[selectedProvince] || [], 12, 10).map((cols, idx) => (
                <div key={idx}>
                  <Heatmap columns={cols} rows={staticRows(cols)} />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Backdrop>
      <div className="flex justify-center gap-4 mt-4">
        <Backdrop className="w-150 flex flex-col">
          <div className="flex justify-center">
            <h1 className="font-bold text-[18px] mt-1">Provider Recommendation</h1>
          </div>

          <div className="px-2 space-y-1 mb-1">
            <h3 className="font-semibold text-SMteal text-[14px]">Choose Location</h3>
            <CitiesDropdown className="mb-2" value={selectedCityProvRec} onSelectCityProvRec={setSelectedCityProvRec} />
            <hr />
            <div>
              <h3 className="font-semibold text-SMteal text-[14px]">Result</h3>
              <div className="space-y-1">
                <div className="flex items-start text-[14px]">
                  <span className="w-40 text-left pr-2">City</span>
                  <span className="w-4 text-center text-SMteal">:</span>
                  <span className="flex-1 text-[14px] pl-2">{selectedCityProvRec || "None"}</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-40 text-left pr-2">Best Provider</span>
                  <span className="w-4 text-center">:</span>
                  <span className="flex-1 text-[14px] pl-2">Telkomsel</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-40 text-left pr-2">Avg. Signal Strength</span>
                  <span className="w-4 text-center ">:</span>
                  <span className="flex-1 text-[14px] pl-2">-92 dBm</span>
                </div>
                <div className="flex items-start text-[14px]">
                  <span className="w-40 text-left  pr-2">Alternative</span>
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
                <span className="w-50 text-left pr-2">1. Makassar (Indosat)</span>
                <span className="w-8 text-center ">:</span>
                <span className="flex-1 text-[14px] pl-2">-101 dBm</span>
              </div>
              <div className="flex items-start text-[14px]">
                <span className="w-50 text-left pr-2">2. Denpasar (Indosat)</span>
                <span className="w-8 text-center ">:</span>
                <span className="flex-1 text-[14px] pl-2">-107 dBm</span>
              </div>
              <div className="flex items-start text-[14px]">
                <span className="w-50 text-left pr-2">3. Semarang (XL Axiata)</span>
                <span className="w-8 text-center ">:</span>
                <span className="flex-1 text-[14px] pl-2">-105 dBm</span>
              </div>
              <div className="flex items-start text-[14px]">
                <span className="w-50 text-left pr-2">4. Bogor (Telkomsel)</span>
                <span className="w-8 text-center ">:</span>
                <span className="flex-1 text-[14px] pl-2">-101 dBm</span>
              </div>
              <div className="flex items-start text-[14px]">
                <span className="w-50 text-left pr-2">5. Bekasi (Indosat)</span>
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
                <span className="w-50 text-left pr-2">1. Jakarta Pusat (Telkomsel)</span>
                <span className="w-8 text-center ">:</span>
                <span className="flex-1 text-[14px] pl-2">-81 dBm</span>
              </div>
              <div className="flex items-start text-[14px]">
                <span className="w-50 text-left pr-2">2. Denpasar (Indosat)</span>
                <span className="w-8 text-center ">:</span>
                <span className="flex-1 text-[14px] pl-2">-83 dBm</span>
              </div>
              <div className="flex items-start text-[14px]">
                <span className="w-50 text-left pr-2">3. Semarang (XL Axiata)</span>
                <span className="w-8 text-center ">:</span>
                <span className="flex-1 text-[14px] pl-2">-84 dBm</span>
              </div>
              <div className="flex items-start text-[14px]">
                <span className="w-50 text-left pr-2">4. Bogor (Telkomsel)</span>
                <span className="w-8 text-center ">:</span>
                <span className="flex-1 text-[14px] pl-2">-87 dBm</span>
              </div>
              <div className="flex items-start text-[14px]">
                <span className="w-50 text-left pr-2">5. Tangerang Kota (Indosat)</span>
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