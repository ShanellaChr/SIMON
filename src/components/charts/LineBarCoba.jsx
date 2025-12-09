import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ComposedChartWidget({
  data,
  height = 280,
  showLegend = true,
  showGrid = true,
  areaKey = "amt",
  barKey = "pv",
  lineKey = "uv",
  areaColor = "var(--color-SMaqua)",
  barColor = "var(--color-SMnavy)",
  lineColor = "var(--color-SMtsel)",
}) {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
          {showGrid && <CartesianGrid stroke="#e5e7eb" />}

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {showLegend && <Legend />}

          <Area
            type="monotone"
            dataKey={areaKey}
            fill={areaColor}
            stroke={areaColor}
            fillOpacity={0.3}
          />

          <Bar dataKey={barKey} barSize={18} fill={barColor} />

          <Line
            type="monotone"
            dataKey={lineKey}
            stroke={lineColor}
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
