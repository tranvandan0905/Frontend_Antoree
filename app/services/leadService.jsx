export async function getLead() {
  const res = await fetch("http://localhost:5000/api/lead");
  return res.json();
}