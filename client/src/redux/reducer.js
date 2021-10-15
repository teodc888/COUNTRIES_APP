import { ALL_COUNTRIES, GET_COUNTRY } from "./actions";

const inicialState = {
  country: {},
  countryId: {}
};

function rootReducer(state = inicialState, action) {

  if (action.type === ALL_COUNTRIES) {
    return {
      ...state,
      country: action.payload,
    };
  }
  if(action.type === GET_COUNTRY){
    return{
      ...state,
      countryId: action.payload
      
    }
  }
  return state;
}

export default rootReducer;
