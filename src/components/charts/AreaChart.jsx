'use client';

import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const dataBulan = [
    { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 300, pv: 2210, amt: 2290 },
    { name: "Mar", uv: 200, pv: 2290, amt: 2000 },
    { name: "Apr", uv: 278, pv: 2000, amt: 2181 },
    { name: "May", uv: 189, pv: 2181, amt: 2500 },
    { name: "Jun", uv: 239, pv: 2500, amt: 2100 },
    { name: "Jul", uv: 349, pv: 2100, amt: 2400 },
];

const AreaChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <AreaChart width={500} height={400} data={dataBulan}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CustomTooltip/>}/>
                <Legend />
                <Area
                    dataKey="amt"
                    stackId="1"
                    type="monotone"
                    fill="var(--color-SMxl)"
                />
                <Area
                    dataKey="pv"
                    stackId="2"
                    type="monotone"
                    fill="var(--color-SMisat)"
                />
                <Area
                    dataKey="uv"
                    stackId="3"
                    type="monotone"
                    fill="var(--color-SMtsel)"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black p-4 border border-gray-300 rounded shadow">
                <p className="font-bold items-center mb-2 text-SMcream">{`Bulan: ${label}`}</p>
                <p className="mb-2 text-SMcream">{`UV: ${payload[2]?.value}`}</p>
                <p className="mb-2 text-SMcream">{`PV: ${payload[1]?.value}`}</p>
                <p className="mb-2 text-SMcream">{`AMT: ${payload[0]?.value}`}</p>
            </div>
        )
    }
}

export default AreaChartComponent;