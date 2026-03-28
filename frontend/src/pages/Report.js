import { useLocation, useNavigate } from "react-router-dom";

function Report() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {
    condition: "No data",
    score: 0,
    suggestions: []
  };

  const moodHistory = ["🙂", "😐", "😞", "🙂", "😊"];

  let summary = "";

  if (data.condition === "Depression") {
    summary =
      "You may be experiencing low mood and emotional fatigue. Focus on support and regular routine.";
  } else if (data.condition === "Anxiety") {
    summary =
      "Signs of worry or nervousness are present. Breathing exercises and calming routines may help.";
  } else if (data.condition === "Stress") {
    summary =
      "Current responses suggest stress load. Try balancing tasks and taking mindful breaks.";
  } else {
    summary = "Mental wellness appears stable. Continue healthy habits.";
  }

  return (
    <div className="page">
      <h1>📊 Wellness Report</h1>

      <div className="card">
        <h2>Condition: {data.condition}</h2>
        <h3>Score: {data.score}</h3>

        <div
          style={{
            width: "100%",
            height: "20px",
            background: "#ddd",
            borderRadius: "10px",
            marginTop: "15px"
          }}
        >
          <div
            style={{
              width: `${data.score}%`,
              height: "100%",
              background: "red",
              borderRadius: "10px"
            }}
          ></div>
        </div>
      </div>

      <div className="card">
        <h3>📅 Mood History</h3>
        <div style={{ fontSize: "35px" }}>
          {moodHistory.map((mood, index) => (
            <span key={index} style={{ margin: "10px" }}>
              {mood}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          navigate("/suggestions", {
            state: { suggestions: data.suggestions }
          })
        }
      >
        View Suggestions
      </button>

      <div className="card">
        <h3>💡 Summary</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Report;