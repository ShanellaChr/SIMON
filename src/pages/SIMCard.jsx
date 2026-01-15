import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";
import SimCardTable from "../components/SIMCardTable";
import { useState } from "react";

const simCardData = [
  {
    iccid: "8962010000146613780",
    msisdn: "6281431226901",
    imei: "3596667961951801",
    provider: "Telkomsel",
    sessionStatus: "Offline",
    billingStatus: "In-Billing",
    usage: "249 MB",
    signal: -98, // dBm
  },
  {
    iccid: "8962010000146613780",
    msisdn: "6281431226901",
    imei: "3596667961951801",
    provider: "Telkomsel",
    sessionStatus: "Offline",
    billingStatus: "Suspended",
    usage: "249 MB",
    signal: -85,
  },
   {
    iccid: "8962010000146613780",
    msisdn: "6281431226901",
    imei: "3596667961951801",
    provider: "Telkomsel",
    sessionStatus: "Offline",
    billingStatus: "Suspended",
    usage: "249 MB",
    signal: -90,
  },
];

export default function SIMCard() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };
  return (
    <MainLayout>
      <h1 className="font-poppins font-extrabold text-2xl mb-1">SIM CARD</h1>
      <div className="flex items-center gap-4 mb-4">
        <SearchBar value={searchValue} onChange={setSearchValue} onSearch={handleSearch} />
        <FilterButton />
      </div>
      <div>
        <SimCardTable data={simCardData} />
      </div>
    </MainLayout>
  );
}
