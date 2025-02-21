import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/scene"; // Ensure correct casing

const menuItems = ["Home", "Music", "Bio", "Live Dates", "Blog"];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <nav
        style={{
          position: "absolute",

          top: 0,
          left: 0,
          right: 0,
          background: "black",
          color: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            style={{ background: "transparent", color: "white", border: "none", cursor: "pointer" }}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </button>
        ))}
      </nav>
      <Canvas>
        <Scene activeIndex={activeIndex} />
      </Canvas>
    </div>
  );
}