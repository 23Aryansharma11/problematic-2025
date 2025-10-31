import { persistentMap as map, persistentAtom } from "@nanostores/persistent";

export const memoryStore = map("memory", {
  status: "pending", // "pending" | "started" | "won" | "lost",
});

export const memoryTimer = persistentAtom("memory-timer", 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function incrementMemoryTimer() {
  const current = memoryTimer.get();
  memoryTimer.set(current + 1);
}
