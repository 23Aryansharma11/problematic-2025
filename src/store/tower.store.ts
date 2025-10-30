import { persistentMap as map, persistentAtom } from "@nanostores/persistent";

export const towerStore = map("tower", {
  status: "pending", // "pending" | "started" | "won" | "lost",
});

export const towerTimer = persistentAtom("tower-timer", 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
});


export function incrementTowerTimer() {
  const current = towerTimer.get();
  towerTimer.set(current + 1);
}
