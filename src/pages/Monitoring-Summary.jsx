import MainLayout from "../layouts/MainLayout";
import Backdrop from "../components/Backdrop";
import PieChartComponent from "../components/charts/PieChart";

const dataBilling = [
  { name: "Telkomsel", value: 302250},
  { name: "XL", value: 200003},
  { name: "Indosat", value: 105500}
];

export default function Summary() {
  return (
    <MainLayout>
      <h1 className="font-poppins font-extrabold text-2xl ">SUMMARY</h1>
      <div className="flex-1 grid grid-cols-2 gap-3 ml-1 mr-2 ">
        {/* left widget */}
        <div className="flex flex-col gap-3 h-full">
          <Backdrop className="flex-1">
            <div className="flex justify-center">
              <h1 className="font-bold text-xl ">Status SIM Cards</h1>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">In Billing</h3>
                <PieChartComponent data={dataBilling} />
                <h3 className="font-semibold">Suspended</h3>
                <PieChartComponent data={dataBilling} />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">In Testing</h3>
                <PieChartComponent data={dataBilling} />
                <h3 className="font-semibold">Retired</h3>
                <PieChartComponent data={dataBilling} />
              </div>
            </div>
          </Backdrop>

          <Backdrop className="flex-1">
            <div className="flex justify-center">
              <h1 className="font-bold text-xl ">SIM Card IMEI Statistic</h1>
            </div>
          </Backdrop>
        </div>

        {/* right widget */}
        <div className="flex flex-col gap-3 h-full">
          <Backdrop className="flex-1">
            <div className="flex justify-center">
              <h1 className="font-bold text-xl ">Quota Usage</h1>
            </div>
          </Backdrop>

          <Backdrop className="flex-1">
            <div className="flex justify-center">
              <h1 className="font-bold text-xl ">Network Type</h1>
            </div>

          </Backdrop>

          <Backdrop className="flex-1">
            <div className="flex justify-center">
              <h1 className="font-bold text-xl ">Signal Strength</h1>
            </div>
          </Backdrop>
        </div>

      </div>
    </MainLayout>
  );
}
