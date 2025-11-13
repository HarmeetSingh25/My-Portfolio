import React, { useRef } from "react";
import Hometext from "./Hometext";
import Astronote from "../component/Astronote";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion } from "framer-motion";

const FloatingAstronaut = ({ mouse }) => {
  const modelRef = useRef();

  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1 - 1.2;
      modelRef.current.rotation.y +=
        (mouse.current.x * 0.5 - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.x +=
        (mouse.current.y * 0.3 - modelRef.current.rotation.x) * 0.05;
    }
  });

  return <Astronote ref={modelRef} scale={1.2} position={[0, -1.2, 0]} />;
};

const Home = () => {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
    mouse.current.y = -(event.clientY / window.innerHeight - 0.5) * 2;
  };

  return (
    <section id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Left: Hero Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left space-y-4 z-10"
      >
        <Hometext />
      </motion.div>

      {/* Right: 3D Canvas */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 h-[400px] md:h-[550px] flex justify-center items-center"
      >
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Environment preset="city" />
          <FloatingAstronaut mouse={mouse} />
        </Canvas>
      </motion.div>
    </section>
  );
};

export default Home;
    