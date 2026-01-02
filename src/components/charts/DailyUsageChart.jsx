'use client';

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, } from 'recharts';
import DateRangeDaily from '../DateRangeDaily';

const dataDaily = [
    { date: '16/10/2025', value: 21.8 },
    { date: '17/10/2025', value: 23.73 },
    { date: '18/10/2025', value: 23.8 },
    { date: '19/10/2025', value: 88.38 },
    { date: '20/10/2025', value: 45.34 },
    { date: '21/10/2025', value: 79.25 },
    { date: '22/10/2025', value: 83.96 },
    { date: '23/10/2025', value: 60.1 },
    { date: '24/10/2025', value: 69.04 },
];

const DailyUsageChart = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <DateRangeDaily />
                <div className="text-[12px] font-semibold">Unit: MB</div>
            </div>

            <ResponsiveContainer width="100%" height={250} style={{ overflow: 'visible' }}>
                <LineChart data={dataDaily} margin={{ top: 5, right: 30, left: 0}}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 10, fontWeight: 600, fill: 'var(--color-SMnavy)' }}
                        axisLine={{ stroke: 'var(--color-SMnavy)' }}
                        tickLine={{ stroke: 'var(--color-SMnavy)' }}
                        padding={{ left: 20, right: 20 }}
                    />
                    <YAxis
                        tick={{ fontSize: 10, fontWeight: 600, fill: 'var(--color-SMnavy)' }}
                        axisLine={{ stroke: 'var(--color-SMnavy)' }}
                        tickLine={{ stroke: 'var(--color-SMnavy)' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="var(--color-SMredAlert)"
                        strokeWidth={2}
                        dot={{
                            r: 4,
                            stroke: 'var(--color-SMcream)',
                            strokeWidth: 2,
                            fill: 'var(--color-SMnavy)',
                        }}
                        activeDot={{ r: 6 }}
                    >
                        <LabelList
                            dataKey="value"
                            position="top"
                            fontSize={10}
                            fill="var(--color-SMnavy)"
                            fontWeight={600}
                        />
                    </Line>
                    <Tooltip content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

/* CUSTOM TOOLTIP */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border rounded px-2 py-1 text-[11px] shadow">
                <p className="font-semibold">{payload[0].payload.date}</p>
                <p>{payload[0].value} MB</p>
            </div>
        );
    }
    return null;
};



export default DailyUsageChart;


