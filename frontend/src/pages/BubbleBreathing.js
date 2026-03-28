import { useEffect, useState } from "react";

function BubbleBreathing() {
  const [phase, setPhase] = useState("Inhale");
  const [size, setSize] = useState(150);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev === "Inhale" ? "Exhale" : "Inhale"));
      setSize((prev) => (prev === 150 ? 250 : 150));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h1>🎈 Bubble Breathing</h1>
      <p>Follow the bubble rhythm calmly</p>

      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          background: "white",
          margin: "40px auto",
          transition: "all 4s ease-in-out"
        }}
      ></div>

      <h2>{phase}</h2>
    </div>
  );
}

export default BubbleBreathing;