import { ALL_COUNTRIES } from "./actions";

const inicialState = {
  country: {},
};

function rootReducer(state = inicialState, action) {
  if (action.type === ALL_COUNTRIES) {
    return {
      ...state,
      country: action.payload,
    };
  }
  return state;
}

export default rootReducer;
