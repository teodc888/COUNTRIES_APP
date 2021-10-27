import React, {useState} from "react";
import Card from "../card/card";
import Paginado from "../paginado/paginado";
import { useSelector } from "react-redux";
import "./cards.css"


function Cards({currentPage, setCurrentPage}) {

  const countries = useSelector((state) => state.countries);
  // Pagina actual
  // const[currentPage, setCurrentPage] = useState(1);
  // cantidad de paises que tengo por pagina
  const[paisesPorPagina, setPaisesPorPagina]= useState(10);
  // seteo el index del ultimo pais
  const indeceDelUltimoPais = currentPage * paisesPorPagina // 10
  const indiceDelPrimerPais = indeceDelUltimoPais - paisesPorPagina // 0
  const currentPaises = countries.slice(indiceDelPrimerPais, indeceDelUltimoPais)
  // slice muestra un nuevo array empezando del principio al final
  const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  
  return (
    <div>
        <Paginado 
          paisesPorPagina= {paisesPorPagina}
          countries= {countries.length}
          paginado={paginado}
          />
      <div className="contenedorCards">
      {

      currentPaises.length &&
      currentPaises.map((element) => {

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
              
    </div>
  );
}

export default Cards;


/*

*/