import "./informacion.css"
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCountry } from "../../redux/actions";
import { Link } from "react-router-dom";



export function Informacion(props) {

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
                <h1 className="tituloInfo">{country[0].name}</h1>
                <img className="imageninfo" src={country[0].imagen} alt="imagen" />
                <h2 className="continenteInfo">{country[0].continente}</h2>
                <h3 className="subinfo">{country[0].subregion}</h3>
                <h4 className="areaunfo">AREA: {country[0].area}</h4>
                <h4 className="poblacioninfo">POBLACION: {country[0].poblacion}</h4>
                <Link to="/home">
                    <button className="botoninfo">Atras</button>
                </Link>
                
                
            </div> : <p>...cargando</p>
        }
        </>
    )
}

export default Informacion;
