import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BuscarPorNombre } from "../../redux/actions";
import "./buscador.css"

export default function Buscador(){
    const dispatch = useDispatch();
    const[name, setName]= useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleButton(e){
        e.preventDefault();
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
            <button 
            type="submit" 
            onClick={e => handleButton(e)}
            className="botonBuscar"
            >
                BUSCAR
            </button>

        </div>
    )

}