import "./informacion.css"
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCountry } from "../../redux/actions";
import { Link } from "react-router-dom";



function Informacion(props) {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(GetCountry(props.match.params.idPais));
    }, [dispatch])
    const country = useSelector((state) => state.countryId)
    

    return(
        <>
            {
                country.length > 0 ?
                <div className="contenedorInfo">
                    <img className="imageninfo" src={country[0].imagen} alt="imagen" />
                    <h1 className="tituloInfo"> INFORMACION: </h1>
                    <h1 className="tituloInfo">{country[0].name}</h1>
                    <p className="ID">ID: {country[0].id}</p>
                    <h4 className="ID">CAPITAL: {country[0].capital}</h4>
                    <h4 className="continenteInfo">CONTINENTE: {country[0].continente}</h4>
                    <h4 className="subinfo">SUBCONTINENTE: {country[0].subregion}</h4>
                    <h4 className="areaunfo">AREA: {new Intl.NumberFormat("de-DE").format(country[0].area) + " km2"}</h4>
                    <h4 className="poblacioninfo">POBLACION: {new Intl.NumberFormat("de-DE").format(country[0].poblacion)}</h4>

                </div> : <p>...cargando</p>
            }
            { 
                country[0]?.turisticos === undefined || country[0]?.turisticos.length === 0 ? <div className="contenedorTuristico">
                    <h1>NO HAY ACTIVIDADES</h1>
                    <Link to="/formulario">
                        <button className="crearActividad1">CREAR ACTIVIDAD</button>
                    </Link>
                    </div> : country[0].turisticos.map((turisticos) => (
                    <div className="contenedorTuristico" key={turisticos.id}>
                            <h1 className="nameActividad">{turisticos.name}</h1>
                            <h2>temporada: {turisticos.temporada}</h2>
                            <h2>Dificultad: {turisticos.dificultad}</h2>
                            <h2>Duracion: {turisticos.duracion} Minutos</h2>
                    </div>
                        
                ))
            }
            <Link to="/home">
                <button className="botonRecargar">VOLVER</button>
            </Link>
                 
        </>
    )
}

export default Informacion;
