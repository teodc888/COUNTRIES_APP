import { ALL_COUNTRIES, GET_COUNTRY, POST_ACTIVITY, FILTER_BY_CONTINENTE, FILTER_BY_NOM, FILTER_BY_POB } from "./actions";

const inicialState = {
  country: {},
  countryId: {},
  countryFilter: {}
};

function rootReducer(state = inicialState, action) {

  if (action.type === ALL_COUNTRIES) {
    return {
      ...state,
      country: action.payload,
      countryFilter: action.payload
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
    const countries = state.countryFilter;
    const statusFilter = action.payload === "All" ? countries: countries.filter(el => el.continente === action.payload)
    return{
      ...state,
      country: statusFilter

    }
  }
  if(action.type === FILTER_BY_NOM){
    let sortedArr = action.payload === "AZ" ? 
    state.country.sort(function (a, b){
      // El sort compara dos valores y los compara y los pone a la derecha o a la izquierda dependiendo de si son mas grandes o mas chicos 1 0 -1
      if(a.name > b.name){
        return 1;
      }
      if(b.name > a.name){
        return -1;
      }
      return 0;
    }) :
    state.country.sort(function (a, b){
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
      country: sortedArr
    }
      

  }if(action.type === FILTER_BY_POB){
    let sortedArr = action.payload === "--" ? 
    state.country.sort(function (a, b){
      // El sort compara dos valores y los compara y los pone a la derecha o a la izquierda dependiendo de si son mas grandes o mas chicos 1 0 -1
      if(a.poblacion > b.poblacion){
        return 1;
      }
      if(b.poblacion > a.poblacion){
        return -1;
      }
      return 0;
    }) :
    state.country.sort(function (a, b){
      // El sort compara dos valores y los compara 
      if(a.poblacion > b.poblacion){
        return -1;
      }
      if(b.poblacion > a.poblacion){
        return 1;
      }
      return 0;
    })
    console.log(sortedArr)
    return{
      ...state,
      country: sortedArr
    }
  
  }
  
  return state;
}

export default rootReducer;
