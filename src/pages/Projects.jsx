import ProjectCard from "../component/ProjectCard";
import { motion } from "framer-motion";
import Akadia from "../../assests/Akadia.png";
import Carrent from "../../assests/Carrent.png";
import Shopping from "../../assests/Shoping.png";

const projects = [
  {
    title: "Shopping App",
    thumbnail: Shopping,
    description: "Browse movies, search titles & filter results in this sleek React application.",
    longDescription:
      "This project allows users to explore movies with a clean and responsive UI built in React. It features search functionality, filter options, and a focus on performance and usability. Deployed via Vercel.",
    tech: ["React", "Tailwind", "API"],
    demo: "https://practice-project-2-with-react.vercel.app/",
    github: "https://github.com/HarmeetSingh25/Practice-project-2-with-React"
  },
  {
    title: "Rental Car Marketplace",
    thumbnail: Carrent,
    description: "A full-featured car rental website built with React and Tailwind CSS.",
    longDescription:
      "Users can browse available cars, view details, and start the rental process in this modern car-rental UI. Built with React, Tailwind CSS for the UI, and deployed on Vercel.",
    tech: ["React", "Tailwind", "JavaScript"],
    demo: "https://rental-car-project-5oi2.vercel.app/",
    github: "https://github.com/HarmeetSingh25/rental_car_project"
  },
  {
    title: "Akadia – Landing Page",
    thumbnail: Akadia,
    description: "Visually stunning landing page created with HTML, CSS & animation effects.",
    longDescription:
      "Akadia is a responsive and animated landing page project that showcases UI design skills using core web technologies. It was deployed on GitHub Pages to demonstrate front-end craftsmanship.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://harmeetsingh25.github.io/Akadia/",
    github: "https://github.com/harmeetsingh25/Akadia"
  }
];


const Projects = () => {
  return (
    <section id="projects" className="pt-20">
      <h2 className="text-4xl font-bold text-center">My Projects</h2>
      <p className="text-gray-400 text-center max-w-xl mx-auto mt-2">
        A collection of work I’m proud of — built with modern tools and clean UI.
      </p>

      <div className="mt-12 flex flex-col gap-8 max-w-3xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
