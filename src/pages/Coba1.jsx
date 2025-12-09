import { Line } from "recharts";
import LineBarCoba from "../components/charts/LineBarCoba";

const dashboardData = [
  { name: "Jan", uv: 400, pv: 240, amt: 240 },
  { name: "Feb", uv: 300, pv: 139, amt: 221 },
  { name: "Mar", uv: 200, pv: 980, amt: 229 },
  { name: "Apr", uv: 278, pv: 390, amt: 200 },
];

export default function Dashboard() {
  return (
    <div className="p-6 bg-SMcream min-h-screen font-poppins">
      <h1 className="text-20 font-bold text-SMnavy mb-4">
        Dashboard Overview
      </h1>

      <div className="bg-white rounded-xl shadow p-4">
        <LineBarCoba
          data={dashboardData}
          height={300}
          showLegend={true}
          areaColor="var(--color-SMaqua)"
          barColor="var(--color-SMnavy)"
          lineColor="var(--color-SMtsel)"
        />
      </div>
    </div>
  );
}
