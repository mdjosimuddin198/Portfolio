import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

import { IconContext } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript } from "react-icons/si";
const LogoSphere = () => {
  const icons = [
    <FaReact color="#61DBFB" />,
    <FaNodeJs color="#3C873A" />,
    <FaGitAlt color="#F05032" />,
    <FaDocker color="#0db7ed" />,
    <FaAws color="#FF9900" />,
    <FaHtml5 color="#E44D26" />,
    <FaCss3Alt color="#264de4" />,
    <FaJs color="#F7DF1E" />,
    <SiMongodb color="#4DB33D" />,
    <SiPostgresql color="#336791" />,
    <SiTypescript color="#3178C6" />,
  ];

  const groupRef = useRef();
  const radius = 4;

  // Rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  // Icons কে sphere surface এ বসানো
  const iconMeshes = icons.map((icon, i) => {
    const phi = Math.acos(-1 + (2 * i) / icons.length);
    const theta = Math.sqrt(icons.length * Math.PI) * phi;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    return (
      <mesh key={i} position={[x, y, z]}>
        <Html center>
          <IconContext.Provider value={{ size: "2em" }}>
            {icon}
          </IconContext.Provider>
        </Html>
      </mesh>
    );
  });

  return <group ref={groupRef}>{iconMeshes}</group>;
};

export default LogoSphere;
