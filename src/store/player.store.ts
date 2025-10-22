import { atom, map } from "nanostores";

// export const user = atom("");
export const branch = atom("");
export const year = atom("");

const player = map({
  name: "",
  isSignedIn: false,
  branch: "",
  year: 0,
});

// Login user
export function setPlayer({
  name,
  branch,
  year,
  password,
}: {
  name: string;
  branch: string;
  year: number;
  password: string;
}) {
  // Check if password is correct
  if (password !== "1234") {
    return { success: false };
  }
  // Check if player already exists
  const presentPlayer = player.get();

  if (presentPlayer) {
    unSetPlayer();
  }

  player.set({
    name,
    branch,
    year,
    isSignedIn: true,
  });

  return { success: true };
}

export function getPlayer() {
  const user = player.get();
  if (!user || !user.isSignedIn) {
    return null;
  }
  return user;
}

export function unSetPlayer() {
  player.set({
    name: "",
    isSignedIn: false,
    branch: "",
    year: 0,
  });
}
