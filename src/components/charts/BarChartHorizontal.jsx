'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Cell } from "recharts";
import LogoTsel from "/LogoProvider/LogoTsel.svg";
import LogoXL from "/LogoProvider/LogoXL.svg";
import LogoIsat from "/LogoProvider/LogoIsat.svg";

const providerColorMap = {
    Telkomsel: "var(--color-SMtsel)",
    XL: "var(--color-SMxl)",
    Indosat: "var(--color-SMisat)",
};

const providerLogoMap = {
    Telkomsel: LogoTsel,
    XL: LogoXL,
    Indosat: LogoIsat,
};

const CustomYAxisTick = ({ x, y, payload }) => {
    const logo = providerLogoMap[payload.value];

    return (
        <g transform={`translate(${x - 75},${y - 18})`}>
            <image href={logo} width={70} height={35} />
        </g>
    );
};

const HorizontalBarChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart
                data={data}
                layout="vertical"
                margin={{ left: 40, right: 40 }}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                <XAxis
                    type="number"
                    domain={[0, 100]}
                    tick={{ fontSize: 12, fontWeight: 600, fill: "var(--color-SMnavy)" }}
                />

                <YAxis
                    type="category"
                    dataKey="name"
                    tick={<CustomYAxisTick />}
                    width={60}
                />

                <Bar 
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={providerColorMap[entry.name]}
                        />
                    ))}

                    <LabelList
                        dataKey="value"
                        position="right"
                        formatter={(v) => `${v}%`}
                        fill="var(--color-SMnavy)"
                        fontSize={12}
                        fontWeight={600}
                    />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default HorizontalBarChart;
