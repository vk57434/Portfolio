import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <div className="portfolio" id="top">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Skills />
    <Experience />
    <Education />
    <Projects />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    <a className="back-to-top" href="#top" aria-label="Back to top">
      ↑
    </a>
  </div>
);

export default App;
