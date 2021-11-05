import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux/reducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware)
  )
);

export default store;
