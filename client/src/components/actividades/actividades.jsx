import "./actividades.css";
import React, { useEffect } from "react";
import { AllActividades } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Actividades() {
  const dispatch = useDispatch();
  const actividades = useSelector((state) => state.actividades);
  useEffect(() => {
      dispatch(AllActividades());
    }, []);

  console.log(actividades)
    

  return (
    <>
      <h1>ACTIVIDADES</h1>
      <div>
        {
            actividades === undefined || actividades.length === 0 ? <h1>No hay actividades</h1> : actividades.map((actividades) =>{
                return(
                    <div  className="contenedorActividades" key={actividades.id}>
                        <h1>{actividades.name}</h1>
                        <h2>Dificultad: {actividades.dificultad}</h2>
                        <h3>Duracion: {actividades.duracion}</h3>
                        <h3>Temporada: {actividades.temporada}</h3>
                        <Link to={`/pais/${actividades.countries.map((el) =>el.id)}`}>
                            <h3>Pais: {actividades.countries.map((el) => el.name)}</h3>
                        </Link>

                  </div>
                )
            })
            
        }
        {

        }
      </div>
      <Link to="/home">
        <button className="botonRecargar">Volver</button>
      </Link>
    </>
  );
}

export default Actividades;
