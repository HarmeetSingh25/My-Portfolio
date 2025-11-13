import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Loader from "./component/Loader";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Testimonials from "../src/pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import BackToTop from "./component/BackToTop";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Experiences />
          <Testimonials />
          <Contact />
          <Footer />
          <BackToTop />   {/* <-- add this */}

        </>
      )}
    </div>
  );
};

export default App;
