import { createStore, combineReducers } from "redux";

/* import Rducers */
import Exemple from './Reduser/Exemple'
import Firebase from './Reduser/Firebase'
import Contacts from './Reduser/Contacts'
import FeedGallery from './Reduser/FeedGallery'
import Details from './Reduser/Details'
import Comments from './Reduser/Comments'

const store = combineReducers({
    Exemple,
    Firebase,
    Contacts,
    FeedGallery,
    Details,
    Comments,
   
})

export default createStore(store);