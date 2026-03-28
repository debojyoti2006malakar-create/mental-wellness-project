import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Assessment() {
  const navigate = useNavigate();

  const questions = [
  "How have your studies or academic workload affected your mood recently?",
  "Describe your sleep quality and energy levels during the past few days.",
  "What emotions have you felt most strongly today (sadness, fear, joy, nervousness, etc.)?",
  "Do you feel pressure, stress, or anxiety related to exams, deadlines, or future plans?",
  "How comfortable do you feel interacting socially with friends, classmates, or family?",
  "Describe your motivation level for daily tasks and responsibilities.",
  "Is there anything currently making you feel emotionally overwhelmed or mentally disturbed?"
];

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    const combinedText = answers.join(" ");

    const response = await axios.post("http://127.0.0.1:8000/analyze", {
      text: combinedText
    });

    navigate("/report", {
      state: response.data
    });
  };

  return (
  <div className="page">
    <h1>🧠 Wellness Assessment</h1>

    {questions.map((q, index) => (
      <div key={index}>
        <p>{q}</p>
        <textarea
          rows="2"
          cols="50"
          value={answers[index]}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      </div>
    ))}

    <button onClick={handleSubmit}>Analyze</button>
  </div>
);
}

export default Assessment;