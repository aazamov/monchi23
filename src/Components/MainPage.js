import React from "react";
import { Parallax } from "react-parallax";
import Main from "../Images/main-image.jpg";

const MainPage = () => {
  return (
    <div className="App">
      <Parallax speed={10} strength={400} bgImage={Main}>
        <div className="content">
          <div className="text-content">
            <h1>M O N C H I</h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MainPage;
