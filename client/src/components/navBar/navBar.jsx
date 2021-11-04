import "./navBar.css";
import React from "react";
import { Link} from "react-router-dom";
import Imgen from "../../imagenes/gif4.gif";
import { useDispatch} from "react-redux";
import { filtradoPorContinente, filtrarPorNombre, filtrarPorPoblacion} from "../../redux/actions";
import Buscador from "../buscador/buscador";


function NavBar({ setCurrentPage, setOrden}) {
  const dispatch = useDispatch();


  function handelFilterPorContinente(e){
    dispatch(filtradoPorContinente(e.target.value))
  }

  function handelFilterPorNombre(e){
    e.preventDefault();
    dispatch(filtrarPorNombre(e.target.value))
    setCurrentPage(1);
    setOrden(e.target.value)

    
    
  }

  function handelfiltrarPorPoblacion(e){
    e.preventDefault();
    dispatch(filtrarPorPoblacion(e.target.value))
    setCurrentPage(1);
    setOrden(e.target.value)

    
  }



  return (
    <>
      <nav className="navBar">
        <Link to="/">
          <img className="imagenBar" alt="imagen" src={Imgen} />
        </Link>
        <span className="nameBar">DellAcquasCountries</span>
        <span className="buscadorBar">
          <p>BUSCADOR</p>
          <Buscador />
        </span>
        <span className="continenteBar">
          <p>
            <select onChange={e => handelFilterPorContinente(e)} className="selecte">
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
            <select onChange={e => handelFilterPorNombre(e)} className="selecte">
              <option>FILTRAR POR...</option>
              <option value="AZ">A...Z</option>

              <option value="ZA">Z...A</option>
            </select>
          </p>
        </span>
        <span className="ordenarBar">
          <p>
            <select  onChange={e => handelfiltrarPorPoblacion(e)} className="selecte">
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
        <span>
          <Link to="/actividades">
            <button className="crearActividad">Ver actividades</button>
          </Link>
        </span>
      </nav>
    </>
  );
}

export default NavBar;