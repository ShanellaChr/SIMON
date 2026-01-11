import AreaChartComponent from "../components/charts/AreaChart";
import Heatmap from "../components/charts/heatmap";

const columns = [
  "Kab. Bandung",
  "Kota Bandung",
  "Cimahi",
  "Garut",
  "Tasikmalaya",
  "Cianjur",
];

const rows = [
  {
    label: "Telkomsel",
    cells: [
      { value: -99, status: "excellent" },
      { value: -108, status: "poor" },
      { value: -92, status: "moderate" },
      { value: -99, status: "excellent" },
      { value: -89, status: "excellent" },
      { value: -89, status: "excellent" },
    ],
  },
  {
    label: "XL Axiata",
    cells: [
      { value: -103, status: "poor" },
      { value: -95, status: "moderate" },
      { value: -99, status: "excellent" },
      { value: -78, status: "excellent" },
      { value: -97, status: "moderate" },
      { value: -97, status: "moderate" },
    ],
  },
  {
    label: "Indosat",
    cells: [
      { value: -96, status: "moderate" },
      { value: -95, status: "moderate" },
      { value: -103, status: "poor" },
      { value: -101, status: "poor" },
      { value: -101, status: "poor" },
      { value: -88, status: "excellent" },
    ],
  },
];

export default function Dashboard() {
    return (
        <div className="p-6 font-poppins">
            <h2 className="text-20 font-bold text-SMnavy mb-4">
               halaman coba-coba
            </h2>   
            <Heatmap columns={columns} rows={rows} />
        </div>
    );
}
