import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Ab from "./pages/Ab";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { HashLoader } from 'react-spinners';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); // Simulate a 2-second loading time

    return () => clearTimeout(timeoutId); 
  }, []);


  
  return (
    <>
      <div className="">
      {isLoading && (
        <div className="min-h-screen flex justify-center items-center">
          <HashLoader color="#6C63FF"  loading={isLoading} size={80} /> 
        </div>
      )}
      {!isLoading && (
        
          <div className="container mx-auto">
            <div id="top" className=""></div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
      )}
      </div>
    </>
  );
}

export default App;
