import { useState } from "react";

function BubblePop() {
  const [score, setScore] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", color: "white" }}>
      <h1>🫧 Bubble Pop</h1>
      <p>Click the bubble to relax</p>
      <h2>Score: {score}</h2>

      <div
        onClick={() => setScore(score + 1)}
        style={{
          width: "150px",
          height: "150px",
          background: "#4FC3F7",
          borderRadius: "50%",
          margin: "30px auto",
          cursor: "pointer",
          boxShadow: "0 0 30px white"
        }}
      ></div>
    </div>
  );
}

export default BubblePop;