import { PieChart, Pie, Cell, Tooltip, Label, ResponsiveContainer } from "recharts";

const providerColors = {
    Telkomsel: "var(--color-SMtsel)",
    XL: "var(--color-SMxl)",
    Indosat: "var(--color-SMisat)"
};

const PieChartComponent = ({ data }) => {
    const total = data.reduce((a, b) => a + b.value, 0);

    return (
        <ResponsiveContainer width="100%" height={200}> 
            <PieChart>
                <defs>
                    <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feOffset dx="0" dy="2" />
                        <feGaussianBlur stdDeviation="3" result="offset-blur" />
                        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                        <feFlood floodColor="rgba(0,0,0,0.70)" result="color" />
                        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                    </filter>
                </defs>

                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="50%"
                    outerRadius="90%"
                    strokeWidth={0}
                    style={{ filter: "url(#innerShadow)" }}
                    label={(props) => CustomPercentageLabel(props, total)}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={index}
                            fill={providerColors[entry.name]}
                        />
                    ))}

                </Pie>

                {/* Total di tengah donut */}
                <text
                    x="50%"
                    y="40%"
                    textAnchor="middle"
                    className="fill-SMnavy font-semibold text-md"
                >
                    Total
                </text>

                <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    className="fill-SMnavy font-extrabold text-lg"
                >
                    {total.toLocaleString("id-ID")}
                </text>

                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
    );
};

const CustomPercentageLabel = (props, total) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, value } = props;
    const RADIAN = Math.PI / 180;

    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const percent = ((value / total) * 100).toFixed(0) + "%";

    return (
        <text
            x={x}
            y={y}
            fill="#0A2540"
            fontSize="12"
            fontWeight="600"
            textAnchor="middle"
            dominantBaseline="central"
        >
            {percent}
        </text>
    );
};




const CustomTooltip = ({ active /*, payload */ }) => {
  if (!active) return null;
  return (
    <div className="w-40 bg-SMnavy text-SMcream p-3 rounded-lg shadow-lg text-sm">
      <div className="flex justify-between">
        <span>Online</span>
        <span>: 1</span>
      </div>
      <div className="flex justify-between">
        <span>Offline</span>
        <span>: 2</span>
      </div>
      <div className="flex justify-between">
        <span>Never Online</span>
        <span>: 0</span>
      </div>
    </div>
  );
};


export default PieChartComponent;
