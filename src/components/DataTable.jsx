// ini di IMEI INFO Detail SIM Card Page
export default function DataTable({ columns, data, maxHeight = "300px" }) {
  return (
    <div className="border border-gray-300 rounded-md overflow-hidden bg-white">
      {/* SCROLL AREA */}
      <div className="overflow-y-auto" style={{ maxHeight }}>
        <table className="w-full text-[10px] border-collapse">
          <thead className="sticky top-0 bg-SMnavy text-SMcream z-10">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-3 py-2 text-center font-semibold border-b">{col.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center text-gray-500 py-4">No data available</td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50"
                >
                  {columns.map((col) => (
                    <td key={col.key} className="text-center py-1">
                      {row[col.key] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
