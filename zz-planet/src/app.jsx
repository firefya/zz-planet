import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

const images = [
  "/images/Still-01.png",
  "/images/Still-02.png",
  "/images/Still-03.png",
  "/images/Still-04.png",
  "/images/Still-05.png",
];

const menuItems = ["Home", "Music", "Bio", "Live Dates", "Blog"];

function ImagePlane({ texture, position }) {
  return (
    <a.mesh position={position}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} />
    </a.mesh>
  );
}

function Scene({ activeIndex }) {
  const { camera } = useThree();
  const textures = images.map((src) => new TextureLoader().load(src));

  useEffect(() => {
    camera.position.x = activeIndex * 2;
  }, [activeIndex]);

  return textures.map((texture, i) => (
    <ImagePlane key={i} texture={texture} position={[i * 2, 0, 0]} />
  ));
}

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
