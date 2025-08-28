export async function getQuizQuestions() {
  const res = await fetch("http://localhost:5000/api/quizquestion");
  return res.json();
}
export async function CheckQuizAnswers(answers) {
  const res = await fetch("http://localhost:5000/api/checkQuizAnswers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answers }), 
  });

  return res.json();
}
