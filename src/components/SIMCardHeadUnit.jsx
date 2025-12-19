import Backdrop from "./Backdrop";
import i_MSISDNIcon from "../assets/SIMcardIcons/i.MSISDN.svg";
import i_Billing from "../assets/SIMcardIcons/i.Billing.svg";
import i_ICCIDIcon from "../assets/SIMcardIcons/i.ICCID.svg";
import i_IMEI from "../assets/SIMcardIcons/i.IMEI.svg";
import i_ProviderIcon from "../assets/SIMcardIcons/i.Provider.svg";
import i_SignalStrength from "../assets/SIMcardIcons/i.SignalStrength.svg";

const HEAD_CONFIG = [
  { key: "ICCID", label: "ICCID", icon: i_ICCIDIcon },
  { key: "MSISDN", label: "MSISDN", icon: i_MSISDNIcon },
  { key: "IMEI", label: "IMEI", icon: i_IMEI },
  { key: "Provider", label: "Provider", icon: i_ProviderIcon },
  { key: "SignalStrength", label: "Signal Strength", icon: i_SignalStrength },
  { key: "BillingStatus", label: "Billing Status", icon: i_Billing },
];

export default function SIMCardHeadUnit({ data }) {
  return (
    <Backdrop>
      <div className="flex items-center justify-center py-2 gap-8">
        {HEAD_CONFIG.map((item, index) => {
          const value = data?.[item.key] ?? "-";

          return (
            <div
              key={item.key}
              className="flex items-center"
            >
              <div className="flex items-center gap-3 min-w-fit">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-6 h-8"
                />

                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] font-bold text-SMnavy">
                    {item.label}
                  </span>
                  <span className="text-[14px] font-medium text-SMnavy mr-6">
                    {value}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Backdrop>
  );
}
