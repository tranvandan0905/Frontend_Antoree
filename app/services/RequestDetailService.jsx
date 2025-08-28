export async function PostrequestDetail(email) {
  const res = await fetch("http://localhost:5000/api/requestDetail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }), 
  });
  return res.json();
}
