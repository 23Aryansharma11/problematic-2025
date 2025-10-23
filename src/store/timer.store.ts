import { persistentAtom } from "@nanostores/persistent";

// store key, initial value in seconds (30 minutes)
export const timer = persistentAtom("timer", 30 * 60, {
  encode: JSON.stringify,
  decode: JSON.parse
});

// Helpers to manage the timer
export function decrementTimeRemaining() {
  const current = timer.get();
  timer.set(current > 0 ? current - 1 : 0);
}

export function resetTimer() {
  timer.set(30 * 60); 
}

export function getTimeRemaining() {
  return timer.get();
}
