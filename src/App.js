import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />

      <SocialLinks />
    </div>
  );
}

export default App;
