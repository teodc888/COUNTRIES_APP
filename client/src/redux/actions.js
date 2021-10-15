export const ALL_COUNTRIES = "ALL_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY"

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