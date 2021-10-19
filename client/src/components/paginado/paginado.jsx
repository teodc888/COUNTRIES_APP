import React from "react";
import "./paginado.css"

export default function Paginado({paisesPorPagina, countries, paginado}){
    const pageNumber = []
                        //el Math.ceil redondea para arriba
    for (let i = 1; i <= Math.ceil(countries/paisesPorPagina); i++){
        pageNumber.push(i )
    }


    return(
        <>
        
            <nav>
                <ul className="paginado">
                {
                    pageNumber && 
                    pageNumber.map(number =>{
                        return(
                            <ul key={number}>
                                <p className="pag" onClick={() => paginado(number)}>{number}</p>
                            </ul>
                        )
                        })
                }
                </ul>
            </nav>

        </>
    )
    
}