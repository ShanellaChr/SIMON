import i_SignalStrength from "../assets/SIMcardIcons/i.SignalStrength.svg";
import i_AreaSignal from "../assets/geoIcons/i.AreaSignal.svg";
import i_WorstCity from "../assets/geoIcons/i.City.svg";
import i_ProviderIcon from "../assets/SIMcardIcons/i.Provider.svg";

const HEAD_CONFIG = [
  { key: "Avg. Signal", label: "Avg. Signal (All Providers)", icon: i_SignalStrength },
  { key: "Area Signal", label: "Area Signal (All Providers)", icon: i_AreaSignal },
  { key: "Top Provider", label: "Top Provider", icon: i_ProviderIcon },
  { key: "Worst City", label: "Worst City / Provider", icon: i_WorstCity },
];

export default function GeoHeadUnit({ data }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg" style={{
        boxShadow:
          "0 2px 5px rgba(0,0,0,0.07), inset 0 1px 3px rgba(0,0,0,0.15)",
      }}>
      <div className="flex">
        {HEAD_CONFIG.map((item) => {
          const value = data?.[item.key] ?? "-";

          return (
            <div
              key={item.key}
              className="flex items-center gap-3 px-6 py-4 flex-1"
            >
              {/* ICON */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-7 h-7"
              />

              {/* TEXT */}
              <div className="flex flex-col leading-tight">
                <span className="text-[14px] font-bold text-SMNavy">
                  {item.label}
                </span>
                <span className="text-[12px] font-semibold text-SMnavy">
                  {value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
