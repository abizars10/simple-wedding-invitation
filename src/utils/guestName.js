export function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("to");

  if (!name || name.trim() === "") {
    return "Tamu Undangan";
  }

  const guestName = name.trim();
  return guestName.charAt(0).toUpperCase() + guestName.slice(1);
}
