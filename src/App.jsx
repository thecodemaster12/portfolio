import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Ab from "./pages/Ab";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <div id="top" className=""></div>
          <Navbar />
          {/* <Hero /> */}
          {/* <About /> */}
          <div className="min-h-screen bg-red-600"></div>
          <Ab />
          {/* <Skills />
          <Projects />
          <Contact /> */}
        </div>
      </div>
    </>
  );
}

export default App;
