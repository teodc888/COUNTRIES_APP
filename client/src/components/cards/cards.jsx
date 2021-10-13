import React from "react";
import Card from "../card/card";
import { useSelector } from "react-redux";
import "./cards.css"

export function Cards() {
  const country = useSelector((state) => state.country);
  return (
    <div className="contenedorCards">
      {country.length &&
        country.map((element) => {
          return (
            <Card 
            name={element.name}
            continente={element.continente}
            imagen={element.imagen}
            />
          );
        })}
    </div>
  );
}

export default Cards;