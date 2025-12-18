import MainLayout from "../layouts/MainLayout";
import Backdrop from "../components/Backdrop";
import PieChartComponent from "../components/charts/PieChart";
import BarChartComponent from "../components/charts/BarChart";
import HorizontalBarChart from "../components/charts/BarChartHorizontal";
import MonthYearDropdown from "../components/MonthYearDropdown";
import StackedBarChart from "../components/charts/StackedBarChart";
import { data } from "react-router-dom";

const dataBilling = [
  { name: "Telkomsel", value: 302250 },
  { name: "XL", value: 200003 },
  { name: "Indosat", value: 105500 }
];

const dataIMEI = [
  {
    name: "In Billing",
    hasImei: 531403,
    noImei: 323455,
  },
  {
    name: "In Testing",
    hasImei: 145876,
    noImei: 56832,
  },
];

const dataQuotaUsage = [
  { name: "Telkomsel", value: 45 },
  { name: "XL", value: 41.41 },
  { name: "Indosat", value: 63.4 },
];

const dataNetworkType = [
  {
    name: "2G",
    Telkomsel: 22,
    XL: 30,
    Indosat: 47,
  },
  {
    name: "4G",
    Telkomsel: 88,
    XL: 75,
    Indosat: 49,
  },
];

const dataSignalStrength = [
  {
    name: "Excellent <-90dBm",
    Telkomsel: 22,
    XL: 30,
    Indosat: 47,
  },
  {
    name: "Moderate -91~-99dBm",
    Telkomsel: 88,
    XL: 75,
    Indosat: 49,
  },
  {
    name: "Poor >-99dBm",
    Telkomsel: 22,
    XL: 44,
    Indosat: 5,
  },
];

export default function Summary() {
  return (
    <MainLayout>
      <h1 className="font-poppins font-extrabold text-2xl m-2">SUMMARY</h1>
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
              <h1 className="font-bold text-xl">SIM Card IMEI Statistic</h1>
            </div>
            <BarChartComponent data={dataIMEI} />
          </Backdrop>
        </div>

        {/* right widget */}
        <div className="flex flex-col gap-3 h-full">
          <Backdrop>
            <div className="flex items-center mb-3">
              <h1 className="mx-auto font-bold text-xl">
                Quota Usage
              </h1>
            </div>
            <div className="absolute top-5 right-0 z-1">
              <MonthYearDropdown />
            </div>
            <HorizontalBarChart data={dataQuotaUsage} />
          </Backdrop>

          <Backdrop>
            <div className="flex justify-center">
              <h1 className="font-bold text-xl">Network Type</h1>
            </div>
            <StackedBarChart data={dataNetworkType} />
          </Backdrop>

          <Backdrop>
            <div className="flex justify-center">
              <h1 className="font-bold text-xl ">Signal Strength</h1>
            </div>
            <StackedBarChart data={dataSignalStrength} />
          </Backdrop>
        </div>

      </div>
    </MainLayout>
  );
}
