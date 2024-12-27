import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  const nav = useNavigate();
  return (
    <>
    <h1>404</h1>
    <div className="frame">
      <div />
      <div />
      <div />
    </div>
    <div className="caps">
      <img src="http://ademilter.com/caps.png" alt="" />
    </div>
    <canvas id="canvas" />
    {}
  </>
  );
};

export default NotFound;