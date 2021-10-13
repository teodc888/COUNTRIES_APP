import "./App.css"
import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { AllCountries } from "./redux/actions";
import { connect } from "react-redux";
import LandingPage from "./components/landingPage/landingPage";
import NavBar from "./components/navBar/navBar";
import Cards from "./components/cards/cards";
import Formulario from "./components/formulario/formulario";
import Informacion from "./components/informacion/informacion";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllCountries());
  }, []);
  return (
    <div className="App">
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Switch>
        <Route path="/home">
          <NavBar/>
          <Cards></Cards>
        </Route>
        <Route exact path="/formulario">
          <Formulario />
        </Route>
        <Route exact path="/pais">
          <Informacion/>
        </Route>
      </Switch>
    </div>
  );
}

export default connect(null, {AllCountries}) (App);
