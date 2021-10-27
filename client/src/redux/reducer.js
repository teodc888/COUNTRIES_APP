import { ALL_COUNTRIES, GET_COUNTRY, POST_ACTIVITY, FILTER_BY_CONTINENTE, FILTER_BY_NOM, FILTER_BY_POB, BUSCAR_NOMBRE, ALL_ACTIVIDADES } from "./actions";

const inicialState = {
  countries: [],
  countryId: {},
  countriesFilter: [],
  actividades: []
};

function rootReducer(state = inicialState, action) {

  if (action.type === ALL_COUNTRIES) {
    return {
      ...state,
      countries: action.payload,
      countriesFilter: action.payload
      //copia para el filtro
    };
  }
  if(action.type === GET_COUNTRY){
    return{
      ...state,
      countryId: action.payload
      
    }
  }
  if(action.type === POST_ACTIVITY ){
    return{
      // Solamente necesito que me traiga el estado anterior
      ...state
    }

  }
  if(action.type === FILTER_BY_CONTINENTE){
    const countries = state.countriesFilter;
    const statusFilter = action.payload === "All" ? countries: countries.filter(el => el.continente === action.payload)
    return{
      ...state,
      countries: statusFilter

    }
  }
  if(action.type === FILTER_BY_NOM){
    let sortedArr = action.payload === "AZ" ? 
    state.countries.sort(function (a, b){
      // El sort compara dos valores y  los pone a la derecha o a la izquierda dependiendo de si son mas grandes o mas chicos -1 0 1
      if(a.name > b.name){
        return 1;
      }
      if(b.name > a.name){
        return -1;
      }
      return 0;
    }) :
    state.countries.sort(function (a, b){
      // El sort compara dos valores y los compara 
      if(a.name > b.name){
        return -1;
      }
      if(b.name > a.name){
        return 1;
      }
      return 0;
    })
    console.log(sortedArr)
    return{
      ...state,
      countries: sortedArr
    }
      

  }if(action.type === FILTER_BY_POB){
    let sortedArr = action.payload === "--" ? 
    state.countries.sort(function (a, b){
      // El sort compara dos valores y los pone a la derecha o a la izquierda dependiendo de si son mas grandes o mas chicos 1 0 -1
      if(a.poblacion > b.poblacion){
        return 1;
      }
      if(b.poblacion > a.poblacion){
        return -1;
      }
      return 0;
    }) :
    state.countries.sort(function (a, b){
      // El sort compara dos valores y los compara 
      if(a.poblacion > b.poblacion){
        return -1;
      }
      if(b.poblacion > a.poblacion){
        return 1;
      }
      return 0;
    })
    return{
      ...state,
      countries: sortedArr
    }
  
  }
  if(action.type ===BUSCAR_NOMBRE ){
    return{
      ...state,
      countries: action.payload 
    }

  }
  if(action.type === ALL_ACTIVIDADES ){
    return{
      ...state,
      actividades: action.payload
      
    }
  }
  
  return state;
}

export default rootReducer;
