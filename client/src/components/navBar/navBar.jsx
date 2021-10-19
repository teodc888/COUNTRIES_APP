import "./navBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Imgen from "../../imagenes/gif4.gif";
import { useDispatch} from "react-redux";
import { filtradoPorContinente, filtrarPorNombre, filtrarPorPoblacion } from "../../redux/actions";


export default function NavBar({setBuscar, buscar}) {
  const dispatch = useDispatch();
  const[orden, setOrden]=useState("")




  const handleInputChange = function(e) {
    setBuscar(e.target.value);
  }

  function handelFilterPorStatus(e){
    dispatch(filtradoPorContinente(e.target.value))
  }

  function handelFilterPorNombre(e){
    e.preventDefault();
    dispatch(filtrarPorNombre(e.target.value))
    setOrden(e.target.value)
    
  }

  function handelfiltrarPorPoblacion(e){
    e.preventDefault();
    dispatch(filtrarPorPoblacion(e.target.value))
    setOrden(e.target.value)
    
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
            <select onChange={e => handelFilterPorStatus(e)} className="select">
              <option value="All">CONTINENTE...</option>
              <option value="Americas" >AMERICA</option>
              <option value="Europe">EUROPA</option>
              <option value="Asia">ASIA</option>
              <option value="Africa">AFRICA</option>
              <option value="Oceania">OCEANIA</option>
              <option value="Antarctic">ANTARCTIC</option>
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
            <select onChange={e => handelFilterPorNombre(e)} className="select">
              <option>FILTRAR POR...</option>
              <option value="AZ">A...Z</option>

              <option value="ZA">Z...A</option>
            </select>
          </p>
        </span>
        <span className="ordenarBar">
          <p>
            <select  onChange={e => handelfiltrarPorPoblacion(e)} className="select">
              <option>ORDENAR POR...</option>
              <option value="++">POBLACION ++</option>

              <option value="--">POBLACION --</option>
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
