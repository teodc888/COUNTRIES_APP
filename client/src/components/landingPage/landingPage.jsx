import "./landingPage.css";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Gif from "../../imagenes/gif3.gif";

function LandingPage({setLoading}) {
  const history = useHistory();
  function handleClick(e){
    e.preventDefault(e);
    setLoading(true)
    history.push("/home");
  
  }
  return (
    <div>
      <h1 className="bienvenidos">BIENVENIDOS</h1>
      <Link to="/home">
        <img className="imagenLanding" src={Gif} alt="imagen"  onClick={(e) => handleClick(e)} />
        
      </Link>
    </div>
  );
}

export default LandingPage
