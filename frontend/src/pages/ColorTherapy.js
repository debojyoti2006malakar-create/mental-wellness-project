import { useState } from "react";

function ColorTherapy() {
  const [selectedColor, setSelectedColor] = useState("pink");
  const [cells, setCells] = useState(Array(16).fill("white"));

  const colors = ["pink", "lightblue", "lightgreen", "yellow", "lavender"];

  const paintCell = (index) => {
    const updated = [...cells];
    updated[index] = selectedColor;
    setCells(updated);
  };

  const clearBoard = () => {
    setCells(Array(16).fill("white"));
  };

  const saveArtwork = () => {
    alert("🎨 Artwork saved successfully!");
  };

  return (
    <div className="page">
      <h1>🎨 Color Therapy</h1>
      <p>Selected Color: {selectedColor}</p>

      <div style={{ marginBottom: "20px" }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{
              background: color,
              width: "50px",
              height: "50px",
              margin: "5px",
              borderRadius: "50%",
              border:
                selectedColor === color ? "3px solid black" : "2px solid white"
            }}
          ></button>
        ))}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={clearBoard}>🧽 Erase</button>
        <button onClick={saveArtwork}>💾 Save</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 80px)",
          gap: "10px",
          justifyContent: "center"
        }}
      >
        {cells.map((cell, index) => (
          <div
            key={index}
            onClick={() => paintCell(index)}
            style={{
              width: "80px",
              height: "80px",
              background: cell,
              borderRadius: "10px",
              cursor: "pointer",
              border: "2px solid black"
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorTherapy;