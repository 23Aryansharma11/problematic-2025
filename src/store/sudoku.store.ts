import { persistentMap as map, persistentAtom } from "@nanostores/persistent";

// Persistent map can only
export const sudokuStore = map("sudoku", {
  status: "pending", // "pending" | "started" | "won" | "lost",
  errors: "0"
});

export const sudokuTimer = persistentAtom("sudoku-timer", 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function incrementSudokuTimer() {
  const current = sudokuTimer.get();
  sudokuTimer.set(current + 1);
}
