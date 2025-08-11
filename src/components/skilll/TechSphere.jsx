import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import LogoSphere from "./LogoSphere";

export default function TechSphere() {
  return (
    <div className="w-full ">
      <Canvas camera={{ position: [0, 0, 12] }}>
        <ambientLight intensity={0.8} />
        <OrbitControls enableZoom={false} />
        <LogoSphere />
      </Canvas>
    </div>
  );
}
