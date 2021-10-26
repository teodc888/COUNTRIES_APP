import "./card.css";
import React from "react";
import { Link } from "react-router-dom";
function Card(props) {

  return (
    <>
      <div className="contenedorCard">
        <h1 className="nameCard">{props.name}</h1>
       
        <h3 className="contienenteCard">{props.continente}</h3>
        <Link to={`/pais/${props.id}`}>
          <img className="imagenCard" src={props.imagen} alt="imagen"  />
        </Link>
      </div>
    </>
  );
}

export default Card;