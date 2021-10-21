import "./navBar.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Imgen from "../../imagenes/gif4.gif";
import { useDispatch} from "react-redux";
import { filtradoPorContinente, filtrarPorNombre, filtrarPorPoblacion} from "../../redux/actions";
import Buscador from "../buscador/buscador";


export default function NavBar({ setCurrentPage, setOrden}) {
  const dispatch = useDispatch();
  const history = useHistory()

  function handelFilterPorStatus(e){
    dispatch(filtradoPorContinente(e.target.value))
  }

  function handelFilterPorNombre(e){
    e.preventDefault();
    dispatch(filtrarPorNombre(e.target.value))
    setCurrentPage(1);
    setOrden(e.target.value)
    history.push("/home")
    
    
  }

  function handelfiltrarPorPoblacion(e){
    e.preventDefault();
    dispatch(filtrarPorPoblacion(e.target.value))
    setCurrentPage(1);
    setOrden(e.target.value)
    history.push("/home")
    
  }



  return (
    <>
      <nav className="navBar">
        <img className="imagenBar" alt="imagen" src={Imgen} />
        <span className="nameBar">DellAcquasCountries</span>
        <span className="buscadorBar">
          <p>BUSCADOR</p>
          <Buscador />
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
