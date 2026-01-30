import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList} from "recharts";
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

const AvgSignalHorizontalChart = ({ data }) => {
    return (
        <div className="relative w-full">
            <div className="absolute right-0 top-0 text-right text-[12px] font-semibold pr-2">Unit: dBm</div>
            <ResponsiveContainer width="100%" height={180}>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ left: 40, right: 40 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                    {/* X AXIS = SIGNAL (dBm) */}
                    <XAxis
                        type="number"
                        domain={[90, 100]}
                        tick={{ fontSize: 12, fontWeight: 600, fill: "var(--color-SMnavy)" }}
                    />

                    {/* Y AXIS = Avg. Signal */}
                    <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fontSize: 12, fontWeight: 600, fill: "var(--color-SMnavy)" }}
                    />

                    {/* TELKOMSEL */}
                    <Bar
                        dataKey="Telkomsel"
                        fill={providerColorMap.Telkomsel}
                        barSize={26}
                    >
                        <LabelList
                            dataKey="Telkomsel"
                            position="right"
                            fill="var(--color-SMnavy)"
                            fontWeight={600}
                            fontSize={12}
                        />
                    </Bar>

                    {/* XL */}
                    <Bar
                        dataKey="XL"
                        fill={providerColorMap.XL}
                        barSize={26}
                    >
                        <LabelList
                            dataKey="XL"
                            position="right"
                            fill="var(--color-SMnavy)"
                            fontWeight={600}
                            fontSize={12}
                        />
                    </Bar>

                    {/* INDOSAT */}
                    <Bar
                        dataKey="Indosat"
                        fill={providerColorMap.Indosat}
                        barSize={26}
                    >
                        <LabelList
                            dataKey="Indosat"
                            position="right"
                            fill="var(--color-SMnavy)"
                            fontWeight={600}
                            fontSize={12}
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
        <div className="flex justify-center gap-4 mt-0 mb-5">
            {/* TELKOMSEL */}
            <div className="flex items-center gap-2">
                <div
                    className="w-4 h-4"
                    style={{ backgroundColor: "var(--color-SMtsel)" }}
                />
                <img src={providerLogoMap.Telkomsel} alt="Telkomsel" className="h-4" />
            </div>

            {/* XL */}
            <div className="flex items-center gap-2">
                <div
                    className="w-4 h-4"
                    style={{ backgroundColor: "var(--color-SMxl)" }}
                />
                <img src={providerLogoMap.XL} alt="XL" className="h-4" />
            </div>

            {/* INDOSAT */}
            <div className="flex items-center gap-2">
                <div
                    className="w-4 h-4"
                    style={{ backgroundColor: "var(--color-SMisat)" }}
                />
                <img src={providerLogoMap.Indosat} alt="Indosat" className="h-4" />
            </div>
        </div>
    );
};

export default AvgSignalHorizontalChart;
