import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'

const initState = {

    /* firestore */
    queryGallery: () => firestore().collection("gallery"),
    queryContacts: () => firestore().collection("contacts"),
    queryComment: () => firestore().collection("comment"),
    
    /* auth */
    auth: auth(),
    register:  (email, password) => auth().createUserWithEmailAndPassword(email, password),
    login: login = (email, password) => auth().signInWithEmailAndPassword(email, password),

}

const Firebase = (state = initState, action) => {

    return state
}

export default Firebase
