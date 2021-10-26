import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BuscarPorNombre } from "../../redux/actions";
import "./buscador.css"

function Buscador(){
    const dispatch = useDispatch();
    const[name, setName]= useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        dispatch(BuscarPorNombre(name))
  
    }
    return(
        <div>
            <input 
            type="text"
            placeholder="Buscar paises..."
            onChange={e => handleInputChange(e)}
            className="buscador"
            />

        </div>
    )

}

export default Buscador;