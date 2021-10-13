import "./formulario.css"
import React from "react";
import Buscador from "../buscador/buscador";
import { Link } from "react-router-dom";

export function Formulario(){
    return(
        <div className="contenedorForm">
            <label className="labelNombre">Nombre</label>
            <input className="inputs" />
            <label className="labelDificultad">Dificultad</label>
            <input className="inputs" />
            <label className="labelDuracion">Duracion</label>
            <input className="inputs" />
            <label className="labelTempora">Temporada</label>
            <input className="inputs" />
            <label className="labelPais">Pais</label>
            <Buscador  />
            <button className="botonCrear">Crear</button>
            <Link to="/home"> 
                <button className="botonVolver">Volver</button>
            </Link>
        </div>
    )
}

export default Formulario;