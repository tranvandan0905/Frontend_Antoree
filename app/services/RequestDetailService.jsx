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
export async function getrequestDetail() {
  const res = await fetch("http://localhost:5000/api/requestDetail");
  return res.json();
}
export async function putRequestDetail(id, isSent) {
  try {
    const res = await fetch(`http://localhost:5000/api/requestDetail/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isSent }),
    });

    return await res.json();
  } catch (error) {
    console.error("Error updating request detail:", error);
    throw error;
  }
}
