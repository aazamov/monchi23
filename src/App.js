import "./App.css";
import React, { useState } from "react";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import TopRequest from "./Components/TopRequest";
import Tailor from "./Components/Tailor";

import Marque from "./Components/Marquee";
import Footer from "./Components/Footer";

const App = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <div className={navbar ? "fixed-top active" : "fixed-top"}>
        <TopRequest />
      </div>
      <div className="non-fix">
        <MainPage />
        <About />
        <Tailor />

        <Marque />
        <Footer />
      </div>
    </div>
  );
};

export default App;
