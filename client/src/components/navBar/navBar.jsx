import "./navBar.css";
import React from "react";
import Buscador from "../buscador/buscador";
import { Link } from "react-router-dom";
import Imgen from "../../imagenes/nav.png"
export default function NavBar() {
  return (
    <>
      <nav className="navBar">
        <img className="imagenBar" src={Imgen} />
        <a className="nameBar" >DellAcquasCountries</a>
        <a className="buscadorBar" >
          <p> BUSCADOR </p>
          <Buscador />
        </a>
        <a className="continenteBar">
          <p>
            <select className="select">
              <option>CONTINENTE...</option>
              <option>AMERICAS</option>
              <option>EUROPA</option>
              <option>ASIA</option>
              <option>AFRICA</option>
              <option>OCEANIA</option>
              <option>ANTARCTIC</option>
              
            </select>
          </p>
        </a>
        <a className="actividadBar">  
          <p>
              <select className="select">
                  <option>ACTIVIDAD...</option>
                  <option>Actividad</option>
              </select>
          </p>
        </a>
        <a className="ordenarBar">

        <p>
      


            <select className="select">
            <option>FILTRAR POR...</option>
            <option>A...Z</option>

            <option>Z...A</option>

            </select>
          </p>
        </a>
        <a className="ordenarBar">
          <p>
            <select className="select">
            <option>ORDENAR POR...</option> 
            <option>POBLACION ++</option>

            <option>POBLACION --</option>

            </select>

            </p>
        </a>
        <a>
          <Link to="/formulario">
              <button className="crearActividad">CREAR ACTIVIDAD</button>
          </Link>
        </a>
      </nav>
    </>
  );
}
