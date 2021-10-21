import axios from "axios"
export const ALL_COUNTRIES = "ALL_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const FILTER_BY_CONTINENTE = "FILTER_BY_CONTINENTE";
export const FILTER_BY_NOM = "FILTER_BY_NOM"
export const FILTER_BY_POB = "FILTER_BY_POB"
export const BUSCAR_NOMBRE = "BUSCAR_NOMBRE"

export function AllCountries() {
  return function (dispatch) {
    fetch("http://localhost:3001/countries")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ALL_COUNTRIES, payload: data });
      });
  };
}

export function GetCountry (idPais) {
  return function(dispatch){
    fetch(`http://localhost:3001/countriesData/${idPais}`)
      .then((res) => res.json())
      .then((data) =>{
        dispatch({type: GET_COUNTRY, payload: data})

      })
  }
}

export function PostActivity(payload){
  return async function(){
    const response = await axios.post("http://localhost:3001/activity", payload);
    console.log(response)
    console.log(payload)
    return response
  }
}

export function filtradoPorContinente(payload){
  return{
    type: FILTER_BY_CONTINENTE,
    payload

  }
}

export function filtrarPorNombre(payload){
  console.log(payload)
  return{
    type: FILTER_BY_NOM,
    payload

  }
}

export function filtrarPorPoblacion(payload){
  console.log(payload)
  return{
    type: FILTER_BY_POB,
    payload

  }
}

export function BuscarPorNombre (name) {
  return function(dispatch){
    fetch(`http://localhost:3001/countriesData?name=${name}`)
      .then((res) => res.json())
      .then((data) =>{
        dispatch({type: BUSCAR_NOMBRE, payload: data})

      })
  }
}