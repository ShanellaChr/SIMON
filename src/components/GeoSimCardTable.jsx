import { useState } from "react";

export default function GeoSimCardTable({data = [], maxHeight = "200px", rowsPerPage = 5}) {
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="border border-gray-100 drop-shadow-sm rounded-md overflow-hidden bg-white">
      <div className="overflow-y-auto" style={{ maxHeight }}>
        <table className="w-full text-[12px] border-collapse">
          {/* HEADER */}
          <thead className="sticky top-0 bg-SMnavy text-SMcream z-10">
            <tr>
              {[
                "No",
                "ICCID",
                "MSISDN",
                "IMEI",
                "Terminal ID",
                "Assigned Branch",
                "Geofence Zone",
                "Current Location",
                "Geofence Status",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="px-2 py-2 text-center font-semibold text-[12px] border-b"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {currentData.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="text-center text-gray-400 py-2"
                >
                  No data available
                </td>
              </tr>
            ) : (
              currentData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-b-0 hover:bg-gray-100"
                >
                  <td className="text-center">
                    {startIndex + idx + 1}
                  </td>
                  <td className="px-2 text-center">{row.iccid}</td>
                  <td className="px-2 text-center">{row.msisdn}</td>
                  <td className="px-2 text-center">{row.imei}</td>
                  <td className="px-2 text-center">{row.terminalId}</td>
                  <td className="px-2 text-center">{row.branch}</td>
                  <td className="px-2 text-center">{row.geofenceZone}</td>
                  <td className="px-2 text-left">
                    {row.currentLocation}
                  </td>

                  {/* STATUS */}
                  <td className="px-2 text-center font-semibold text-SMnavy">
                    {row.geofenceStatus}
                  </td>

                  {/* ACTION */}
                  <td className="px-2 py-1 text-center">
                    <button
                      className="px-5 py-1 rounded-md bg-SMaqua text-SMnavy text-[12px] font-semibold shadow"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
