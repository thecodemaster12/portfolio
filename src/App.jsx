import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
function App() {
  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <Navbar />
          <Hero />
          <About />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
