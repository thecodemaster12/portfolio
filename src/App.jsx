import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" /> */}
          {/* <Route path="/about" element={<h1>About</h1>} /> */}
        </Routes>
      </Router>
      <div className="">
        <div className="container mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
