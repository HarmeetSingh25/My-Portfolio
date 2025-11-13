import OrbitingCircles from "./Orbitingcircles";

// Custom GSAP Icon
const GsapIcon = () => (
  <svg width="100" height="100" viewBox="0 0 128 128">
    <path
      fill="#88CE02"
      d="M64 2C30.4 2 2 30.4 2 64s28.4 62 62 62 62-28.4 62-62S97.6 2 64 2zm23.3 87.7c-6.8 9.3-18 14.3-30 13.2-17.4-1.6-30.2-15.9-30.2-33.9S40 35.8 57.3 34.1c12-.9 23.2 4.1 30 13.4 1.7 2.3 1.2 5.6-1.1 7.3-2.3 1.7-5.6 1.2-7.3-1.1-4.3-5.8-11-9.1-18.2-8.7-12.5.7-22.2 11.4-22.2 24s9.8 23.3 22.3 24c7.2.4 13.8-2.9 18.2-8.6 1.7-2.3 5-2.8 7.3-1.1 2.4 1.7 2.9 5 1.2 7.3z"
    />
  </svg>
);

// react-icons
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiSass,
  SiBootstrap,
  SiThreedotjs
} from "react-icons/si";

export  function Framework() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

      {/* OUTER RING */}
      <OrbitingCircles iconSize={40} radius={120}>
        <FaReact color="#61DBFB" />
        <SiJavascript color="#F7DF1E" />
        <FaGithub color="white" />
        <FaHtml5 color="#E44D26" />
        <FaCss3Alt color="#264DE4" />
        <SiSass color="#CD6799" />
        <SiBootstrap color="#7952B3" />
      </OrbitingCircles>

      {/* INNER RING */}
      <OrbitingCircles iconSize={32} radius={85} reverse speed={2}>
        <SiTailwindcss color="#38BDF8" />
        <SiVite color="#646CFF" />
        <GsapIcon />
        <SiThreedotjs color="white" />
      </OrbitingCircles>
    </div>
  );
}
