import "./landingPage.css";
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="contenedor">
      <Link to="/home">
        <button className="botonLanding">Bienvenido</button>
      </Link>
    </div>
  );
}

export default LandingPage
