import {HeatmapCell} from './HeatmapCell.jsx';

export default function Heatmap({ columns = [], rows = [] }) {
  const gridStyle = {
    gridTemplateColumns: `80px repeat(${columns.length}, minmax(90px, 1fr))`,
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid gap-0.5 bg-SMnavy-100" style={gridStyle}>
        
        {/* EMPTY CORNER */}
        <div className="bg-white" />

        {/* COLUMN HEADER */}
        {columns.map((col) => (
          <div
            key={col}
            className="bg-white h-10 text-[10px] font-semibold flex items-center justify-center px-1"
          >
            {col}
          </div>
        ))}

        {/* ROWS */}
        {rows.map((row) => (
          <>
            {/* ROW LABEL */}
            <div
              key={row.label}
              className="bg-white px-2 py-2 text-[12px] font-semibold flex items-center justify-end"
            >
              {row.label}
            </div>

            {/* CELLS */}
            {row.cells.map((cell, i) => (
              <HeatmapCell key={i} cell={cell} />
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
