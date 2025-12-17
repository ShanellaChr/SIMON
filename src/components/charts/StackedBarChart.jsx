'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from "recharts";
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

const StackedBarChart = ({ data }) => {
    return (
        <div className="w-full">
            <ResponsiveContainer width="100%" height={140}>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ left: 40, right: 40 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                    <XAxis
                        type="number"
                        tick={{ fontSize: 12, fontWeight: 600, fill: "var(--color-SMnavy)" }}
                    />

                    <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fontSize: 12, fontWeight: 600, fill: "var(--color-SMnavy)" }}
                    />

                    {/* TELKOMSEL */}
                    <Bar
                        dataKey="Telkomsel"
                        stackId="1"
                        fill={providerColorMap.Telkomsel}
                    >
                        <LabelList
                            dataKey="Telkomsel"
                            position="center"
                            fill="var(--color-SMnavy)"
                            fontWeight={600}
                        />
                    </Bar>

                    {/* XL */}
                    <Bar
                        dataKey="XL"
                        stackId="1"
                        fill={providerColorMap.XL}
                    >
                        <LabelList
                            dataKey="XL"
                            position="center"
                            fill="var(--color-SMnavy)"
                            fontWeight={600}
                        />
                    </Bar>

                    {/* INDOSAT */}
                    <Bar
                        dataKey="Indosat"
                        stackId="1"
                        fill={providerColorMap.Indosat}
                    >
                        <LabelList
                            dataKey="Indosat"
                            position="center"
                            fill="var(--color-SMnavy)"
                            fontWeight={600}
                        />
                    </Bar>

                </BarChart>
            </ResponsiveContainer>
            <ProviderLegend />
        </div>
    );
};

const ProviderLegend = () => {
    return (
        <div className="flex justify-center gap-2 mt-4">
            {/* TELKOMSEL */}
            <div className="flex items-center gap-2">
                <div
                    className="w-4 h-4"
                    style={{ backgroundColor: "var(--color-SMtsel)" }}
                />
                <img
                    src={providerLogoMap.Telkomsel}
                    alt="Telkomsel"
                    className="h-4"
                />


            </div>

            {/* XL */}
            <div className="flex items-center gap-2">
                <div
                    className="w-4 h-4"
                    style={{ backgroundColor: "var(--color-SMxl)" }}
                />
                <img
                    src={providerLogoMap.XL}
                    alt="XL"
                    className="h-4"
                />

            </div>

            {/* INDOSAT */}
            <div className="flex items-center gap-2">
                <div
                    className="w-4 h-4"
                    style={{ backgroundColor: "var(--color-SMisat)" }}
                />
                <img
                    src={providerLogoMap.Indosat}
                    alt="Indosat"
                    className="h-4"
                />
            </div>
        </div>
    );
};


export default StackedBarChart;
