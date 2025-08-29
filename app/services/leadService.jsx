export async function getLead() {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/api/lead", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return res.json();
}
export async function putLead(id, isSent) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://localhost:5000/api/lead/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ isSent }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Request failed");
    }

    return await res.json();
  } catch (error) {
    console.error("Error updating request detail:", error);
    throw error;
  }
}
export async function stats() {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/api/stats", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return res.json();
}