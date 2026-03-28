import { useState, useEffect } from "react";

function MemoryMatch() {
  const emojis = ["🌿", "🌿", "☀️", "☀️", "🌸", "🌸", "🌙", "🌙"];

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setCards([...emojis].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);

      const [first, second] = newFlipped;

      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 800);
      }
    }
  };

  return (
    <div className="page">
      <h1>🧠 Memory Match</h1>
      <p>Moves: {moves} | Time: {time}s</p>

      {matched.length === cards.length && (
        <h2>🏆 You matched all cards!</h2>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 100px)",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px"
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            style={{
              width: "100px",
              height: "100px",
              background: "white",
              borderRadius: "12px",
              fontSize: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "black",
              transition: "0.3s",
              transform:
                flipped.includes(index) || matched.includes(index)
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)"
            }}
          >
            {flipped.includes(index) || matched.includes(index) ? card : "?"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryMatch;