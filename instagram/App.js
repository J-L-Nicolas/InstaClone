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

    // ## 1 ## requete d'affichage des contacts
    Firebase.queryContacts().onSnapshot(query => {

      let TempContact = []
      
      query.forEach(element => {
  
        TempContact = [...TempContact, {id: element.id ,...element.data()}]
      });
      dispatch(Action(type.CONTACTS_ADD_CONTACT, TempContact))
    })

    // ## 2 ##requete d'affichage de la gallery
    Firebase.queryGallery().onSnapshot(query => {

      let GalleryContact = []

      query.forEach(element => {
        
        GalleryContact = [...GalleryContact, {id: element.id,...element.data()}]

      })
      dispatch(Action(type.FEED_ACTION,GalleryContact))
    })
    
    // ## 3 ## requete d'affichage des Commentaires
    Firebase.queryComment().onSnapshot(query => {

      let TempsComment = []

      query.forEach(element => {
        
        TempsComment = [...TempsComment, {id: element.id,...element.data()}]

      })
      dispatch(Action(type.COMMENTS_ADD,TempsComment))
    })

  }, [])

  /* Render */
  return (
    <View style={{flex: 1}}>
      <Detail/>
    </View>
   )

}

export default App