import React from "react";
import Card from "../card/card";
import { useSelector } from "react-redux";
import "./cards.css"


export function Cards({buscar}) {

  const countries = useSelector((state) => state.country);

  return (
    <div className="contenedorCards">
      {
      countries.length &&
      countries.filter((country) =>{
          if(buscar == ""){
            return country
          }else{
            return country.name.toLowerCase().startsWith(buscar.toLowerCase())
          }
        }).map((element) => {
          console.log(element)
          return (
            <Card 
            id={element.id}
            name={element.name}
            continente={element.continente}
            imagen={element.imagen}
            key={element.id}
            
            />
          );
        })}
    </div>
  );
}

export default Cards;