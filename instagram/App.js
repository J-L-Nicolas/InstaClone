import React, {useEffect} from 'react'
import { View } from 'react-native'

/* import redux */
import { useSelector , useDispatch } from 'react-redux'
import Action, {type} from './Redux/Action'

/* import components */
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Feed from './components/Feed'
import Detail from './components/Detail'

const App = () => {

  /* init const redux */
  const Firebase = useSelector(state => state.Firebase)
  const dispatch = useDispatch()

  useEffect(() => {

    //requete d'affichage des contacts

    Firebase.queryContacts().onSnapshot(query => {

      let TempContact = []
      
      query.forEach(element => {
  
        TempContact = [...TempContact, {id: element.id ,...element.data()}]
      });
      console.log("TempContact", TempContact)
      dispatch(Action(type.CONTACTS_ADD_CONTACT, TempContact))

      //fin de la requte d'affichage des contacts 

    })

    //requete d'affichage de la gallery
    Firebase.queryGallery().onSnapshot(query => {

        let GalleryContact = []

        query.forEach(element => {
         
          GalleryContact = [...GalleryContact, {id: element.id,...element.data()}]

        })

        dispatch(Action(type.FEED_ACTION,GalleryContact))

    })
    //fin de la requete de la gallery 

  }, [])

  /* Render */
  return (
    <View style={{flex: 1}}>
      <Feed/>
    </View>
   )

}

export default App