export async function momolead(email) {
  const res = await fetch("http://localhost:5000/api/momolead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }), 
  });
  return res.json();
}
