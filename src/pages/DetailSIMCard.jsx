import MainLayout from "../layouts/MainLayout";
import arrowBackIcon from "../assets/arrowBackIcon.svg";
import SIMCardHeadUnit from "../components/SIMCardHeadUnit";
import Backdrop from "../components/Backdrop";


const headData = {
    ICCID: "896200000416613780",
    MSISDN: "628143226901",
    IMEI: "359666796195180",
    Provider: "Telkomsel",
    SignalStrength: "-95 dBm | Moderate",
    BillingStatus: "In-Billing",
};


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
            <div className="mt-4">
                <SIMCardHeadUnit data={headData} />
            </div>
            <div className="row row-cols-3 gap-2 flex justify-center mt-4">
                <Backdrop className="w-150">
                    <div className="flex justify-center">
                        <h1 className="font-bold text-[18px]">Session Info</h1>
                    </div>
                    <div className="ml-2">
                        <p>halo</p>
                    </div>
                </Backdrop>
                <Backdrop className="w-150">
                    <h1 className="bg-SMredAlert">a</h1>
                </Backdrop>
                <Backdrop className="w-150">
                    <h1 className="bg-SMredAlert">a</h1>
                </Backdrop>
            </div>
        </MainLayout>
    );
}