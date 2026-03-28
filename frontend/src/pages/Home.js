import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Mental Wellness Platform</h1>
      <p>Your daily emotional companion 🌿</p>

      <div className="card">
        <h3>Start your wellness journey</h3>
        <p>Assess, track, heal, and grow daily.</p>
      </div>

      <div className="nav-buttons">
        <Link to="/assessment"><button>🧠 Assessment</button></Link>
        <Link to="/report"><button>📊 Report</button></Link>
        <Link to="/suggestions"><button>💡 Suggestions</button></Link>
        <Link to="/dashboard"><button>🎮 Gaming Dashboard</button></Link>
      </div>
    </div>
  );
}

export default Home;