import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Backdrop from "../components/Backdrop";
import GeoFencingWidget from "../components/GeoFencing";
import GeoLocationWidget from "../components/GeoLocation";

export default function Geo() {
  const [activeTab, setActiveTab] = useState("geofencing");
  return (
    <MainLayout>
      <h1 className="font-poppins font-extrabold text-2xl mb-2">Geo</h1>
      {/* SWITCH BUTTON */}
      <div className="inline-flex rounded-l-lg rounded-r-lg overflow-hidden border border-gray-300">
        <button
          onClick={() => setActiveTab("geofencing")}
          className={`px-6 py-2 text-sm font-bold transition
            ${activeTab === "geofencing"
              ? "bg-gray-300 text-SMnavy"
              : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
        >
          Geofencing
        </button>

        <button
          onClick={() => setActiveTab("geolocation")}
          className={`px-6 py-2 text-sm font-bold transition
            ${activeTab === "geolocation"
              ? "bg-gray-300 text-SMnavy"
              : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
        >
          Geolocation
        </button>
      </div>

      {/* BACKDROP CONTENT */}
      <Backdrop className="rounded-t-none -mt-1.5">
        {activeTab === "geofencing" ? (<GeoFencingWidget />) : (<GeoLocationWidget />)}
      
      </Backdrop>
    </MainLayout>
  );
}
