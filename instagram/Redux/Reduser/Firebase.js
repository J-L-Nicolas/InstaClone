import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'

const initState = {

    /* firestore */
    queryGallery: queryGallery = () => firestore().collection("gallery"),
    contactsGallery: contactsGallery = () => firestore().collection("contacts"),
    
    /* auth */
    auth: auth(),
    register: register = (email, password) => auth().createUserWithEmailAndPassword(email, password),
    login: login = (email, password) => auth().signInWithEmailAndPassword(email, password),
}

const Exemple = (state = initState, action) => {

    return state
}

export default Exemple
