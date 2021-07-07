import { createStore, combineReducers } from "redux";

/* import Rducers */
import Exemple from './Reduser/Exemple'
import Firebase from './Reduser/Firebase'
import Contacts from './Reduser/Contacts'



const store = combineReducers({
    Exemple,
    Firebase,
    Contacts,
   

})

export default createStore(store);