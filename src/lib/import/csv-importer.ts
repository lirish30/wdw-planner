import { parseCsvLayout } from "@/lib/import/csv-layout";
import { importCanonicalJson } from "@/lib/import/json-importer";
export function importCanonicalCsv(payload: string, canonicalJson: unknown) {
  const layout = parseCsvLayout(payload);
  const preview = importCanonicalJson(canonicalJson);
  return {
    ...preview,
    warnings: layout.unknownCells.map((cell) => ({
      code: "UNMAPPED_CELL",
      severity: "info",
      message: `Preserved source cell: ${cell.value}`,
      source: { path: "csv", row: cell.row, column: String(cell.column), sourceText: cell.value },
    })),
  };
}
