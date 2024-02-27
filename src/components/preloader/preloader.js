import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations/animation";
import "./preloader.css";


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Building</span>
        <span>Your</span>
        <span>Computer</span>
      </div>
    </div>
  );
};

export default PreLoader;