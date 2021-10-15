import "./navBar.css";
import React from "react";
import { Link } from "react-router-dom";
import Imgen from "../../imagenes/gif4.gif";

export default function NavBar({setBuscar, buscar}) {

  const handleInputChange = function(e) {
    setBuscar(e.target.value);
  }

  return (
    <>
      <nav className="navBar">
        <img className="imagenBar" alt="imagen" src={Imgen} />
        <span className="nameBar">DellAcquasCountries</span>
        <span className="buscadorBar">
          <p>BUSCADOR</p>
          <input className="inputsBar" type="text" placeholder="Buscar Pais..." value={buscar} onChange={handleInputChange}  />

        </span>
        <span className="continenteBar">
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
        </span>
        <span className="actividadBar">
          <p>
            <select className="select">
              <option>ACTIVIDAD...</option>
              <option>Actividad</option>
            </select>
          </p>
        </span>
        <span className="ordenarBar">
          <p>
            <select className="select">
              <option>FILTRAR POR...</option>
              <option>A...Z</option>

              <option>Z...A</option>
            </select>
          </p>
        </span>
        <span className="ordenarBar">
          <p>
            <select className="select">
              <option>ORDENAR POR...</option>
              <option>POBLACION ++</option>

              <option>POBLACION --</option>
            </select>
          </p>
        </span>
        <span>
          <Link to="/formulario">
            <button className="crearActividad">CREAR ACTIVIDAD</button>
          </Link>
        </span>
      </nav>
    </>
  );
}
