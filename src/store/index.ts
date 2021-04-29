import { Reducer } from "react";
import { combineReducers, createStore } from 'redux';
import { CounterReducer } from './features/formSubmit'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  form: CounterReducer,
})

const store = createStore(
  rootReducer
)

export default store;
