import { persistentMap as map } from "@nanostores/persistent";

// Persistent map can only
const player = map("player", {
  name: "",
  isSignedIn: "false",
  branch: "",
  year: "",
  isSubmit: "false"
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
  year: string;
  password: string;
}) {
  // Check if password is correct
  if (password !== "6969") {
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
    isSignedIn: "true",
    isSubmit: "false"
  });

  return { success: true };
}

export function getPlayer() {
  const user = player.get();
  if (!user || user.isSignedIn === "false") {
    return null;
  }
  return user;
}

export function subPlayer() {
  const newPlayer = player.get();
  player.set({
    ...newPlayer,
    isSubmit: "true"
  })
}

export function unSetPlayer() {
  player.set({
    name: "",
    isSignedIn: "false",
    branch: "",
    year: "",
    isSubmit: "false"
  });
}