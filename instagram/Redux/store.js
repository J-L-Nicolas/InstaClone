import { createStore, combineReducers } from "redux";

/* import Rducers */
import Exemple from './Reduser/Exemple'



const store = combineReducers({
    Exemple
})

export default createStore(store);