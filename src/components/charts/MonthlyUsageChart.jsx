'use client';

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, } from 'recharts';
import DateRangeMonthly from '../DateRangeMonthly';

const dataMonthly = [
    { month: 'January', value: 79.3 },
    { month: 'February', value: 55.2 },
    { month: 'March', value: 89.4 },
    { month: 'April', value: 45.5 },
    { month: 'May', value: 91.2 },
    { month: 'June', value: 40 },
    { month: 'July', value: 78 },
    { month: 'August', value: 88 },
    { month: 'September', value: 82 },
    { month: 'October', value: 88 },
    { month: 'November', value: 55 },
    { month: 'December', value: 85 },
];

const MonthlyUsageChart = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <DateRangeMonthly></DateRangeMonthly>
                <div className="text-[12px] font-semibold">Unit: MB</div>
            </div>

            <ResponsiveContainer width="100%" height={250} style={{ overflow: 'visible' }}>
                <LineChart data={dataMonthly} margin={{ top: 5, right: 30, left: 0}}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="month"
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
                <p className="font-semibold">{payload[0].payload.month ?? payload[0].payload.date}</p>
                <p>{payload[0].value} MB</p>
            </div>
        );
    }
    return null;
};



export default MonthlyUsageChart;


