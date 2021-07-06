import { createStore, combineReducers } from "redux";

/* import Rducers */
import Exemple from './Reduser/Exemple'
import Firebase from './Reduser/Firebase'


const store = combineReducers({
    Exemple,
    Firebase
})

export default createStore(store);