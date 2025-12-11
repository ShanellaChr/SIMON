import MainLayout from "../layouts/MainLayout";
import Backdrop from "../components/Backdrop";

export default function Summary() {
  return (
    <MainLayout>
      <h1 className="font-poppins font-extrabold text-[24px] text-SMnavy">SUMMARY</h1>
      <div className="grid grid-cols-2 gap-3 ml-1 mr-2">
        {/* left widget */}
        <div className="flex flex-col gap-3">
          <Backdrop width="100%" height="500px">
            <div className="flex justify-center">
              <h1 className="font-bold text-20 text-SMnavy">Status SIM Cards</h1>
            </div>
          </Backdrop>

          <Backdrop width="100%" height="250px">
            <div className="flex justify-center">
              <h1 className="font-semibold text-SMnavy">SIM Card IMEI Statistic</h1>
            </div>
          </Backdrop>
        </div>

        {/* right widget */}
        <div className="flex flex-col gap-3">
          <Backdrop width="100%" height="245px">
            <div className="flex justify-center">
              <h1 className="font-semibold text-SMnavy">Quota Usage</h1>
            </div>
          </Backdrop>

          <Backdrop width="100%" height="245px">
            <div className="flex justify-center">
              <h1 className="font-semibold text-SMnavy">Network Type</h1>
            </div>

          </Backdrop>

          <Backdrop width="100%" height="245px">
            <div className="flex justify-center">
              <h1 className="font-semibold text-SMnavy">Signal Strength</h1>
            </div>
          </Backdrop>
        </div>

      </div>
    </MainLayout>
  );
}
