import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { a } from "@react-spring/three";

const images = [
  "/images/Still-01.png",
  "/images/Still-02.png",
  "/images/Still-03.png",
  "/images/Still-04.png",
  "/images/Still-05.png",
];

function ImagePlane({ texture, position }) {
  return (
    <a.mesh position={position}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} />
    </a.mesh>
  );
}

export default function Scene({ activeIndex }) {
  const { camera } = useThree();
  const textures = images.map((src) => new TextureLoader().load(src));

  useEffect(() => {
    camera.position.x = activeIndex * 2; // Move camera horizontally
  }, [activeIndex]);

  return textures.map((texture, i) => (
    <ImagePlane key={i} texture={texture} position={[i * 2, 0, 0]} />
  ));
}
