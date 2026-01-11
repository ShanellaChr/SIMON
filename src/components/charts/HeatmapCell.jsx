const STATUS_COLOR = {
  excellent: "var(--color-SMgreenHeatmap)",
  moderate: "var(--color-SMyellowHeatmap)",
  poor: "var(--color-SMredHeatmap)",
  none: "var(--color-SMmint)",
};

export function HeatmapCell({ cell }) {
  return (
    <div
      className="h-10 flex items-center justify-center text-[12px] font-semibold text-SMnavy"
      style={{ backgroundColor: STATUS_COLOR[cell.status] }}
      title={String(cell.value)}
    >
      {cell.value}
    </div>
  );
}
