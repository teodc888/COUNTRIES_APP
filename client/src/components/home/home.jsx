import "./home.css";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch} from "react-redux";
import { AllCountries } from "../../redux/actions";
import LandingPage from "../landingPage/landingPage";
import NavBar from "../navBar/navBar";
import Cards from "../cards/cards";
import Formulario from "../formulario/formulario";
import Informacion from "../informacion/informacion";
import Actividades from "../actividades/actividades";
import Gif from "../../imagenes/gif5.gif";
import GifRecarga from "../../imagenes/gif4.gif"

function Home() {
  const dispatch = useDispatch();

  const[loading, setLoading]=useState(true);
  const[currentPage, setCurrentPage] = useState(1)
  const[orden, setOrden]=useState("")

  useEffect(() => {
    dispatch(AllCountries());
    const interval = setInterval(() => {
      setLoading(false)
    },4500);
    return () => {clearInterval(interval)};

  }, [dispatch]);
  

  function handleClick(e){
    e.preventDefault(e);
    setLoading(true)
    dispatch(AllCountries())
  }

  
  const renderCards = (!loading) ? <Cards currentPage={currentPage} setCurrentPage={setCurrentPage} /> : <img src={Gif} alt="Cargando.png" width="500" height="500" alt=""  />;
  return (
    <div>
      <Route exact path="/">
        <LandingPage  setLoading={setLoading}/>
      </Route>
      <Switch>
        <Route path="/home">
          <NavBar 
          setCurrentPage={setCurrentPage}
          setOrden={setOrden}
          />
          {renderCards}
          <button className="botonRecargar" onClick={(e) => handleClick(e)} ><img src={GifRecarga} width="80" alt="imagen" /></button>
        </Route>
        <Route exact path="/formulario">
          <Formulario setLoading={setLoading} />
        </Route>
        <Route exact path="/pais/:idPais" component={Informacion}>
          
        </Route>
        <Route exact path="/actividades">
            <Actividades setLoading={setLoading}/>
        </Route>
      </Switch>
    
    </div>
    
  );
}

export default Home;
