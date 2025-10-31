import { persistentMap as map, persistentAtom } from "@nanostores/persistent";

export const wordleStore = map("wordle", {
  status: "pending", // "pending" | "started" | "won" | "lost",
});

export const wordleTimer = persistentAtom("wordle-timer", 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function incrementWordleTimer() {
  const current = wordleTimer.get();
  wordleTimer.set(current + 1);
}
