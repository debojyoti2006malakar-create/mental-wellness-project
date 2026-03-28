import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <h1>Wellness Gaming Dashboard</h1>

      <div className="nav-buttons">
        <Link to="/bubble-breathing">
          <button>🎈 Bubble Breathing</button>
        </Link>

        <Link to="/bubble-pop">
          <button>🫧 Bubble Pop</button>
        </Link>

        <Link to="/memory-match">
          <button>🧠 Memory Match</button>
        </Link>
        <Link to="/color-therapy">
          <button>🎨 Coloring Therapy</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;