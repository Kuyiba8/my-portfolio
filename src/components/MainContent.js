import React from "react";
import Navbar from "../components/main/Navbar";
import Home from "../components/main/Home";
import SocialLinks from "../components/main/SocialLinks";
import About from "../components/main/About";
import Experience from "../components/main/Experience";
import Contact from "../components/main/Contact";
import Portfolio from "../components/main/Portfolio";
import Footer from "../components/main/Footer";
import Contributers from "../components/main/Contributers";

const MainContent = ({ logoutButton }) => {
  return (
    <div>
      <Navbar logoutButton={logoutButton} />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Contributers />
      <Footer />

      <SocialLinks />
    </div>
  );
};

export default MainContent;
