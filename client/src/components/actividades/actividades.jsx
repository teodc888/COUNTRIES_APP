import "./actividades.css";
import React, { useEffect } from "react";
import { AllActividades} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function Actividades({setLoading}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const actividades = useSelector((state) => state.actividades);
  useEffect(() => {
      dispatch(AllActividades());
    }, [dispatch]);

    function handleClick(e){
      e.preventDefault(e);
      setLoading(true)
      history.push("/home");
    
    }

  return (
    <>
      <h1>ACTIVIDADES</h1>
      <div className="contenedorCards">
        {
            actividades === undefined || actividades.length === 0 ? <h1>No hay actividades</h1> : actividades.map((actividades) =>{
                return(
                    <div  className="contenedorActividades" key={actividades.id}>
                        <h1 className="tituloAc">{actividades.name}</h1>
                        <h2>Dificultad: {actividades.dificultad}</h2>
                        <h3>Duracion: {actividades.duracion} minutos</h3>
                        <h3>Temporada: {actividades.temporada}</h3>
                        <h3 className="nameAc">{actividades.countries.map((el) => el.name + " - ")}</h3>
                  

                  </div>
                )
            })
            
        }
        {
        
        }
      </div>
      <Link to="/home">
        <button className="botonRecargar" onClick={(e) => handleClick(e)} >VOLVER</button>
      </Link>
    </>
  );
}

export default Actividades;
