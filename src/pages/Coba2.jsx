import LineBarCoba from "../components/charts/AreaChart";

const analyticsData = [
  { name: "A", uv: 120, pv: 80, amt: 90 },
  { name: "B", uv: 200, pv: 140, amt: 110 },
  { name: "C", uv: 150, pv: 100, amt: 130 },
  { name: "D", uv: 170, pv: 90, amt: 120 },
];

export default function Analytics() {
  return (
    <div className="p-6 font-poppins">
      <h2 className="text-20 font-bold text-SMnavy mb-4">
        Analytics Detail
      </h2>

      <div className="bg-white rounded-xl shadow p-4">
        <LineBarCoba
          data={analyticsData}
          height={220}
          showLegend={false}
          showGrid={false}
          barColor="var(--color-SMgreenAlert)"
          lineColor="var(--color-SMredAlert)"
          areaColor="var(--color-SMmint)"
        />
      </div>
    </div>
  );
}
