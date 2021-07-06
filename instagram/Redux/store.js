import { createStore, combineReducers } from "redux";

/* import Rducers */
import map from './Reduser/map'

const store = combineReducers({
    map
})

export default createStore(store);