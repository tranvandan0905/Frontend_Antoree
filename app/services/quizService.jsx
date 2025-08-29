export const getQuizQuestions = async (type) => {
  const res = await fetch(`http://localhost:5000/api/quizquestion?type=${type}`);
  
  const data = await res.json();
      console.log("ddd",data);
  return data;
};


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
