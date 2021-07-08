import { createStore, combineReducers } from "redux";

/* import Rducers */
import Exemple from './Reduser/Exemple'
import Firebase from './Reduser/Firebase'
<<<<<<< HEAD
import Contacts from './Reduser/Contacts'
import FeedGallery from './Reduser/FeedGallery'

=======
import Details from './Reduser/Details'
import Comments from './Reduser/Comments'
>>>>>>> origin/DetailComponent


const store = combineReducers({
    Exemple,
<<<<<<< HEAD
    Firebase,
    Contacts,FeedGallery,
   

=======
    Firebase, 
    Details,
    Comments
>>>>>>> origin/DetailComponent
})

export default createStore(store);