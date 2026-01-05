import { useState } from "react";

export default function SimCardTable({ data = [], rowsPerPageOptions = [10, 20, 50] }) {

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  /*Signal Color keknya masih salah*/
  const getSignalColor = (value) => {
    if (value < -90) return "text-SMgreenAlert";     // Excellent
    if (value >= -99 && value <= -91) return "text-yellow-500"; // Moderate
    return "text-SMredAlert";                        // Poor
  };

  const getSignalLabel = (value) => {
    if (value < -90) return "Excellent";
    if (value >= -99 && value <= -91) return "Moderate";
    return "Poor";
  };

  return (
    <div className="border border-gray-100 drop-shadow-sm rounded-md overflow-hidden bg-white">
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-[12px] border-collapse">
          <thead className="bg-SMnavy text-SMcream">
            <tr>
              {[
                "ICCID",
                "MSISDN",
                "IMEI",
                "Provider",
                "Session Status",
                "Billing Status",
                "Kuota Usage",
                "Signal Strength",
                "Action",
              ].map((h) => (
                <th key={h} className="px-3 py-3 text-center font-semibold text-[14px] border-b">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentData.map((row, idx) => (
              <tr
                key={idx}
                className="border-b last:border-b-0 hover:bg-gray-100"
              >
                <td className="px-2 py-2 text-center">{row.iccid}</td>
                <td className="px-2 py-2 text-center">{row.msisdn}</td>
                <td className="px-2 py-2 text-center">{row.imei}</td>
                <td className="px-2 py-2 text-center">{row.provider}</td>
                <td className="px-2 py-2 text-center">{row.sessionStatus}</td>
                <td className="px-2 py-2 text-center">{row.billingStatus}</td>
                <td className="px-2 py-2 text-center">{row.usage}</td>

                {/* SIGNAL */}
                <td
                  className={`px-2 py-2 text-center font-semibold ${getSignalColor(
                    row.signal
                  )}`}
                >
                  {getSignalLabel(row.signal)}
                </td>

                {/* ACTION */}
                <td className="px-2 py-2 text-center">
                  <div className="flex justify-center">
                    <button
                    //   onClick={() => router.push("/DetailSIMCard")}
                      className="px-6 py-1 rounded-l-md bg-SMaqua text-SMnavy text-[12px] font-semibold shadow"
                    >
                      Detail
                    </button>

                    {row.billingStatus === "Suspended" ? (
                      <button
                        className="px-2 py-1 rounded-r-md bg-SMgreenAlert text-SMcream text-[12px] shadow"
                      >
                        Unsuspend
                      </button>
                    ) : (
                      <button
                        className="px-4 py-1 rounded-r-md bg-SMredAlert text-SMcream text-[12px] shadow"
                      >
                        Suspend
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-end gap-4 px-4 py-3 text-[12px]">
        <div className="flex items-center gap-1">
          Rows per page:
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="border-b border-gray-400 outline-none"
          >
            {rowsPerPageOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          {startIndex + 1}-{Math.min(startIndex + rowsPerPage, data.length)} of{" "}
          {data.length}
        </div>

        <div className="flex gap-1">
          <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            className="px-1 disabled:opacity-30"
          >
            ⏮
          </button>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-1 disabled:opacity-30"
          >
            ◀
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-1 disabled:opacity-30"
          >
            ▶
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
            className="px-1 disabled:opacity-30"
          >
            ⏭
          </button>
        </div>
      </div>
    </div>
  );
}
