import "./home.css";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { AllCountries } from "../../redux/actions";
import { connect } from "react-redux";
import LandingPage from "../landingPage/landingPage";
import NavBar from "../navBar/navBar";
import Cards from "../cards/cards";
import Formulario from "../formulario/formulario";
import Informacion from "../informacion/informacion";
import Gif from "../../imagenes/gif.gif";

function Home() {
  const dispatch = useDispatch();

  const[buscar, setBuscar] = useState("");
  const[pais, setPais] = useState({});

  const[loading, setLoading]=useState(true);

  useEffect(() => {
    dispatch(AllCountries());
    const interval = setInterval(() => {
      setLoading(false)
    },3500);
    return () => {clearInterval(interval)};
  }, []);
  
  const renderCards = (!loading) ? <Cards buscar={buscar} setPais={setPais} /> : <img src={Gif} alt="Cargando.png" width="500" height="500"  />;
  return (
    <div>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Switch>
        <Route path="/home">
          <NavBar 
          setBuscar={setBuscar} 
          buscar={buscar}
          />
          {renderCards}
        </Route>
        <Route exact path="/formulario">
          <Formulario />
        </Route>
        <Route exact path="/pais/:idPais" component={Informacion} >

        </Route>
      </Switch>
    </div>
  );
}

export default connect(null, { AllCountries })(Home);
