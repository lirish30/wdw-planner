import Papa from "papaparse";
export type CsvCell = { row: number; column: number; value: string };
export function parseCsvLayout(payload: string) {
  const parsed = Papa.parse<string[]>(payload, { skipEmptyLines: false });
  if (parsed.errors.length) throw new Error(parsed.errors[0]?.message ?? "CSV parse failed");
  const cells = parsed.data.flatMap((row, rowIndex) =>
    row
      .map((value, column) => ({ row: rowIndex + 1, column: column + 1, value: value.trim() }))
      .filter((cell) => cell.value),
  );
  return {
    cells,
    unknownCells: cells.filter(
      (cell) =>
        cell.column === 1 && !/^(STAY|PARK|BREAKFAST|LUNCH|NAP|DINNER|LL)$/.test(cell.value),
    ),
  };
}
