'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, LabelList } from "recharts";

const BarChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={216}>
            <BarChart data={data}
                margin={{ top: 10}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    tick={{
                        fontSize: 12,
                        fontWeight: 600,
                        fill: "var(--color-SMnavy)",
                    }}
                />
                <YAxis
                    width={70}
                    tick={{
                        fontSize: 12,
                        fontWeight: 600,
                        fill: "var(--color-SMnavy)",
                    }} />
                <Legend
                    verticalAlign="bottom"
                    wrapperStyle={{
                        fontSize: "12px",
                        fontWeight: 600,
                        marginBottom: "5px",
                        color: "var(--color-SMnavy)",
                    }}
                />

                <Bar
                    dataKey="hasImei"
                    name="Has IMEI"
                    fill="var(--color-SMbarblue)"
                >
                    <LabelList
                        dataKey="hasImei"
                        position="top"
                        fill="var(--color-SMnavy)"
                        fontSize={12}
                        fontWeight={600}
                    />
                </Bar>

                <Bar
                    dataKey="noImei"
                    name="No IMEI"
                    fill="var(--color-SMbargreen)"
                >

                    <LabelList
                        dataKey="noImei"
                        position="top"
                        fill="var(--color-SMnavy)"
                        fontSize={12}
                        fontWeight={600}
                    />
                </Bar>

            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
