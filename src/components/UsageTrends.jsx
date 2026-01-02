import { useState } from "react";
import DailyUsageChart from "./charts/DailyUsageChart";
import MonthlyUsageChart from "./charts/MonthlyUsageChart";


export default function UsageTrends() {
    const [mode, setMode] = useState("daily");

    return (
        <div className="m-2">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-[18px] text-SMnavy">
                    Usage Trends
                </h1>

                {/* Toogle Button Daily / Monthly */}
                <div className="flex bg-SMnavy rounded-md overflow-hidden mt-2">
                    <button type="button" onClick={() => setMode("daily")} className={`px-7 h-8 text-[16px] font-semibold transition ${mode === "daily" ? "bg-SMteal text-SMcream" : "text-SMcream hover:bg-SMteal/50"}`}>
                        Daily
                    </button>
                    <button type="button" onClick={() => setMode("monthly")} className={`px-4 h-8 text-[16px] font-semibold transition ${mode === "monthly" ? "bg-SMteal text-SMcream" : "text-SMcream hover:bg-SMteal/50"}`} >
                        Monthly
                    </button>
                </div>
            </div>
            

            {/* Chart */}
            <div className="w-full text-SMnavy" key={mode}>
                {mode === "daily" ? <DailyUsageChart /> : <MonthlyUsageChart/>}
            </div>
        </div>

    );
}
