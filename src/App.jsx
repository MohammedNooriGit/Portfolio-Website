import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { DividerBottomLeft } from "./components/Waves";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Navbar />
        <Hero />
        <DividerBottomLeft />
      </div>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <Footer />
    </div>
  );
}

export default App;
