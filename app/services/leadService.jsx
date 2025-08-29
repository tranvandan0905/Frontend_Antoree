export async function getLead() {
  const res = await fetch("http://localhost:5000/api/lead");
  return res.json();
}
export async function putLead(id, isSent) {
  try {
 
    const res = await fetch(`http://localhost:5000/api/lead/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
  const res = await fetch("http://localhost:5000/api/stats");
  return res.json();
}