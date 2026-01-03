import { useState } from "react";

export default function DateRangeDaily({ onSubmit }) {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof onSubmit === "function") onSubmit({ start, end });
    //    data load nanti disini
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <label className="text-[12px] font-semibold">From</label>
            <input
                type="date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="border rounded-md border-gray-200 p-1 text-[12px] font-semibold"
            />
            <label className="text-[12px] font-semibold">To</label>
            <input
                type="date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="border rounded-md border-gray-200 p-1 text-[12px] font-semibold"
            />

            <button
                type="submit"
                className="ml-2 px-4 py-1 text-[12px] font-semibold bg-SMnavy text-SMcream rounded-md border"
            >
                Submit
            </button>
        </form>
    );
}
