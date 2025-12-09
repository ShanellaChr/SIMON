import { useState } from "react";

import MonitoringIcon from "../assets/navIcon/monitoringIcon.svg";
import AnalyticsIcon from "../assets/navIcon/analyticsIcon.svg";
import ReportIcon from "../assets/navIcon/reportIcon.svg";
import SimCardIcon from "../assets/navIcon/simCardIcon.svg";
import LogoutIcon from "../assets/navIcon/logoutIcon.svg";
import ChevronDown from "../assets/navIcon/chevronDown.svg";

export default function Nav() {
  const [openMonitoring, setOpenMonitoring] = useState(false);
  const [openAnalytics, setOpenAnalytics] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const activeClass = (name) =>
    activeItem === name ? "text-SMaqua" : "text-SMcream";

  return (
    <div className="w-64 h-screen bg-SMnavy flex flex-col py-8 px-6 font-poppins">

      {/* LOGO */}
      <div className="flex items-center mb-10">
        <img src="/src/assets/logoSimon.svg" className="h-15" />
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-8">

        {/* MONITORING */}
        <div>
          <div
            onClick={() => {
              setOpenMonitoring(!openMonitoring);
              setActiveItem("Monitoring");
            }}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className={`flex items-center gap-3 font-20 font-bold ${activeClass("Monitoring")} hover:text-SMaqua`}>
              <img src={MonitoringIcon} className="h-5 w-5" />
              Monitoring
            </div>

            <img
              src={ChevronDown}
              className={`h-2.5 w-2.5 transition-transform ${openMonitoring ? "rotate-180" : ""
                }`}
            />
          </div>

          {openMonitoring && (
            <div className="ml-8 mt-3 flex flex-col gap-3">
              <a
                href="/summary"
                onClick={() => setActiveItem("Summary")}
                className={`font-18 font-semibold hover:text-SMaqua ${activeItem === "Summary" ? "text-SMaqua" : "text-SMcream"
                  }`}
              >
                Summary
              </a>

              <a
                href="/geo"
                onClick={() => setActiveItem("Geo")}
                className={`font-18 font-semibold hover:text-SMaqua ${activeItem === "Geo" ? "text-SMaqua" : "text-SMcream"
                  }`}
              >
                Geo
              </a>
            </div>
          )}
        </div>

        {/* ANALYTICS */}
        <div>
          <div
            onClick={() => {
              setOpenAnalytics(!openAnalytics);
              setActiveItem("Analytics");
            }}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className={`flex items-center gap-3 font-20 font-bold hover:text-SMaqua ${activeClass("Analytics")}`}>
              <img src={AnalyticsIcon} className="h-5 w-5" />
              Analytics
            </div>

            <img
              src={ChevronDown}
              className={`h-2.5 w-2.5 transition-transform ${openAnalytics ? "rotate-180" : ""
                }`}
            />
          </div>

          {openAnalytics && (
            <div className="ml-8 mt-3 flex flex-col gap-3">
              <a
                href="/signal-strength"
                onClick={() => setActiveItem("Signal Strength")}
                className={`font-18 font-semibold hover:text-SMaqua ${activeItem === "Signal Strength"
                    ? "text-SMaqua"
                    : "text-SMcream"
                  }`}
              >
                Signal Strength
              </a>

              <a
                href="/quota-usage"
                onClick={() => setActiveItem("Quota Usage")}
                className={`font-18 font-semibold hover:text-SMaqua ${activeItem === "Quota Usage"
                    ? "text-SMaqua"
                    : "text-SMcream"
                  }`}
              >
                Quota Usage Anomaly
              </a>
            </div>
          )}
        </div>

        {/* REPORT */}
        <a
          href="/report"
          onClick={() => setActiveItem("Report")}
          className={`flex items-center gap-3 font-20 font-bold cursor-pointer hover:text-SMaqua ${activeClass(
            "Report"
          )}`}
        >
          <img src={ReportIcon} className="h-5 w-5" />
          Report
        </a>

        {/* SIM CARD */}
        <a
          href="/simcard"
          onClick={() => setActiveItem("SIM Card")}
          className={`flex items-center gap-3 font-20 font-bold cursor-pointer hover:text-SMaqua ${activeClass(
            "SIM Card"
          )}`}
        >
          <img src={SimCardIcon} className="h-5 w-5" />
          SIM Card
        </a>
      </nav>

      {/* LOGOUT */}
      <div className="mt-auto pt-6">
        <div
          onClick={() => setActiveItem("Logout")}
          className={`flex items-center gap-3 cursor-pointer font-20 font-bold hover:text-SMaqua ${activeClass("Logout")}`}
        >
          <img src={LogoutIcon} className="h-5 w-5" />
          Logout
        </div>
      </div>
    </div>
  );
}