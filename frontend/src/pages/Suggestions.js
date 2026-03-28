import { useLocation, useNavigate } from "react-router-dom";

function Suggestions() {
  const location = useLocation();
  const navigate = useNavigate();

  const suggestions = location.state?.suggestions || [];

  const icons = ["🌿", "🧘", "💤"];

  return (
    <div className="page">
      <h1>💡 Personalized Suggestions</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              width: "420px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              fontSize: "20px"
            }}
          >
            <span style={{ fontSize: "28px" }}>
              {icons[index % icons.length]}
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <button
        style={{ marginTop: "30px" }}
        onClick={() => navigate("/dashboard")}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default Suggestions;