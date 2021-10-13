import "./card.css"
import React from "react";
import { Link } from "react-router-dom";
export default function Card (props){
    return(
        <>
            <div className="contenedorCard">
                <h1 className="nameCard">{props.name}</h1>
                <h3 className="contienenteCard">{props.continente}</h3>
                <img className="imagenCard" src={props.imagen} />
                <Link to="/pais">
                    <button className="botonCard">ver</button>
                </Link>
            </div>
        </>
    )
}