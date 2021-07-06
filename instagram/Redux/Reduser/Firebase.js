import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'

const initState = {

    queryGallery: queryGallery = () => firestore().collection("gallery"),
}

const Exemple = (state = initState, action) => {

    return state
}

export default Exemple
