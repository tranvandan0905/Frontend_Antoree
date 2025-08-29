export async function Loginadmin(name,password) {
  const res = await fetch("http://localhost:5000/api/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name,password }), 
  });
  return res.json();
}