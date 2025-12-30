import MainLayout from "../layouts/MainLayout";
import arrowBackIcon from "../assets/arrowBackIcon.svg";
import SIMCardHeadUnit from "../components/SIMCardHeadUnit";
import Backdrop from "../components/Backdrop";
import DataTable from "../components/DataTable";

const headData = {
    ICCID: "896200000416613780",
    MSISDN: "628143226901",
    IMEI: "359666796195180",
    Provider: "Telkomsel",
    SignalStrength: "-95 dBm | Moderate",
    BillingStatus: "In-Billing",
};

const imeiLogColumns = [
  { key: "before", label: "Before" },
  { key: "after", label: "After" },
  { key: "timestamp", label: "Timestamp" },
];

const imeiLogData = [
  {
    before: "359666796195180",
    after: "3596667961951803",
    timestamp: "03-10-2005 22:15:00",
  },
  {
    before: "359666796195180",
    after: "3596667961951802",
    timestamp: "13-09-2005 09:15:00",
  },
  {
    before: "N/A",
    after: "3596667961951801",
    timestamp: "15-09-2005 20:15:00",
  },
  {
    before: "N/A",
    after: "3596667961951801",
    timestamp: "15-09-2005 20:15:00",
  },
  {
    before: "N/A",
    after: "3596667961951801",
    timestamp: "15-09-2005 20:15:00",
  },
  {
    before: "N/A",
    after: "3596667961951801",
    timestamp: "15-09-2005 20:15:00",
  },{
    before: "N/A",
    after: "3596667961951801",
    timestamp: "15-09-2005 20:15:00",
  },{
    before: "N/A",
    after: "3596667961951801",
    timestamp: "15-09-2005 20:15:00",
  },
  {
    before: "N/A",
    after: "3596667961951801",
    timestamp: "15-09-2005 20:15:00",
  },
];



export default function DetailSIMCard() {
    return (
        <MainLayout>
            <div className="relative flex items-center justify-center mt-2">
                <button type="button" className="absolute left-0 flex items-center h-8 bg-SMnavy text-SMcream rounded-md px-3 text-[16px] font-bold">
                    <img src={arrowBackIcon} alt="backIcon" className="mr-1 h-4" /> 
                    Back
                </button>
                <h1 className="font-poppins font-extrabold text-2xl text-SMnavy">DETAIL SIM CARD</h1>
            </div>

            {/* HEAD UNIT */}
            <div className="mt-4">
                <SIMCardHeadUnit data={headData} />
            </div>

            <div className="flex justify-center gap-4 mt-4">

                {/* SESSION INFO */}
                <Backdrop className="w-150 flex flex-col">
                    <div className="flex justify-center py-2">
                        <h1 className="font-bold text-[18px]">Session Info</h1>
                    </div>

                    <div className="px-4 space-y-1.5 mb-1">
                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Session Status</h3>
                            <p className="text-[14px] font-medium">Offline</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Block Status</h3>
                            <p className="text-[14px] font-medium">-</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Last Sync Data Time</h3>
                            <p className="text-[14px] font-medium">2025-09-15T19:08:39:740Z</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">IP Address</h3>
                            <p className="text-[14px] font-medium">10.250.118.95</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Last Online
                            </h3>
                            <p className="text-[14px] font-medium">Now</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Last Offline
                            </h3>
                            <p className="text-[14px] font-medium">Tue Sep 30 2025 16:11:54 GMT+0700</p>
                        </div>
                    </div>
                </Backdrop>

                {/* IMEI INFO */}
                <Backdrop className="w-150 flex flex-col">
                    <div className="flex justify-center py-2">
                        <h1 className="font-bold text-[18px]">IMEI Info</h1>
                    </div>

                    <div className="px-4 space-y-1.5">
                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Current IMEI</h3>
                            <p className="text-[14px] font-medium">Offline</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Old IMEI</h3>
                            <p className="text-[14px] font-medium">-</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Last Change</h3>
                            <p className="text-[14px] font-medium">03-10-2005 22:15:00</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px] mb-1">IMEI Changes Log</h3>
                            <DataTable columns={imeiLogColumns} data={imeiLogData} maxHeight="100px" />
                        </div>
                    </div>
                </Backdrop>

                {/* MERCHANT INFO */}
                <Backdrop className="w-150 flex flex-col">
                    <div className="flex justify-center py-2">
                        <h1 className="font-bold text-[18px]">Merchant Info</h1>
                    </div>

                    <div className="px-4 space-y-1.5">
                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Terminal ID</h3>
                            <p className="text-[14px] font-medium">TRM-9876543210</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Merchant ID</h3>
                            <p className="text-[14px] font-medium">MCH-0012345</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Merchant Name</h3>
                            <p className="text-[14px] font-medium">Kopi Simon</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Merchant Location</h3>
                            <p className="text-[14px] font-medium">Grand Indonesia</p>
                            <hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Postal Code</h3>
                            <p className="text-[14px] font-medium">40235</p><hr />
                        </div>

                        <div>
                            <h3 className="font-semibold text-SMteal text-[14px]">Merchant Type</h3>
                            <p className="text-[14px] font-medium">Merchant Strategic</p>
                        </div>
                    </div>
                </Backdrop>
            </div>
        </MainLayout>
    );
}
