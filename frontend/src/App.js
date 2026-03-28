import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Report from "./pages/Report";
import Suggestions from "./pages/Suggestions";
import Dashboard from "./pages/Dashboard";
import BubbleBreathing from "./pages/BubbleBreathing";
import BubblePop from "./pages/BubblePop";
import MemoryMatch from "./pages/MemoryMatch";
import ColorTherapy from "./pages/ColorTherapy";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/report" element={<Report />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bubble-breathing" element={<BubbleBreathing />} />
        <Route path="/bubble-pop" element={<BubblePop />} />
        <Route path="/memory-match" element={<MemoryMatch />} />
        <Route path="/color-therapy" element={<ColorTherapy />} />
      </Routes>
    </Router>
  );
}

export default App;