import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCountry } from "../../redux/actions";
import { Link } from "react-router-dom";
import Gif from "../../imagenes/back.gif"


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
            <div>
                <h1>NOMBRE: {country[0].name}</h1>
                <h2>CONTINENTE: {country[0].continente}</h2>
                <h3>SUB REGION: {country[0].subregion}</h3>
                <h4>AREA: {country[0].area}</h4>
                <h4>POBLACION: {country[0].poblacion}</h4>
                <img src={country[0].imagen} />
                
                
            </div> : <p>...cargando</p>
        }
        <Link to="/home">
            <img src={Gif} />
        </Link>
        </>
    )
}

export default Informacion;
