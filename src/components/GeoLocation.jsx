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


export default function GeoLocationWidget() {
  return (
    <div className="p-4">
      <h2 className="font-semibold text-lg mb-2">Geolocation</h2>
        {/* Heatmap */}
        <Heatmap columns={columns} rows={rows} />
    </div>
  );
}
