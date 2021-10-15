import "./landingPage.css";
import React from "react";
import { Link } from "react-router-dom";
import Gif from "../../imagenes/gif3.gif";

function LandingPage() {
  return (
    <div>
      <h1 className="bienvenidos">BIENVENIDOS</h1>
      <Link to="/home">
        <img className="imagenLanding" src={Gif} />
        
      </Link>
    </div>
  );
}

export default LandingPage
