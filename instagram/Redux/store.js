import { createStore, combineReducers } from "redux";

/* import Rducers */
import Exemple from './Reduser/Exemple'
import Firebase from './Reduser/Firebase'
import Contacts from './Reduser/Contacts'
import FeedGallery from './Reduser/FeedGallery'



const store = combineReducers({
    Exemple,
    Firebase,
    Contacts,FeedGallery,
   

})

export default createStore(store);