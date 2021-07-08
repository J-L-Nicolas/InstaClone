<<<<<<< HEAD
import React, {useEffect} from 'react'
import { View } from 'react-native'

/* import redux */
import { useSelector , useDispatch } from 'react-redux'
import Action, {type} from './Redux/Action'

/* import components */
import Header from './components/Header'
import Login from './components/Login'
<<<<<<< HEAD
import Feed from './components/Feed'
=======
import Register from './components/Register'
>>>>>>> 0827344c0fa8f46cc9303ba859955d3eea91ddf0
=======
import React, { useEffect } from 'react'
import { View } from 'react-native'

/* import redux */
import { useSelector, useDispatch } from 'react-redux'

/* import components */
import Detail from './components/Detail'
import Action, { type } from './Redux/Action'
>>>>>>> origin/DetailComponent

const App = () => {

  /* init const redux */
  const Firebase = useSelector(state => state.Firebase)
  const dispatch = useDispatch()
<<<<<<< HEAD
  

  useEffect(() => {

    //requete d'affichage des contacts

    Firebase.contactsGallery().onSnapshot(query => {

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

    //finde la requete de la gallery 


  }, [])

  return (
    <View style={{flex: 1}}>
<<<<<<< HEAD
      {/* <Header/> */}
      <Feed/>
=======
     <Login/>
>>>>>>> 0827344c0fa8f46cc9303ba859955d3eea91ddf0
=======

  useEffect(() => {
    Firebase.queryComment().onSnapshot(query => {
      let Comments = []
      query.forEach(element => { Comments = [...Comments, {id: element.id ,...element.data()}] });
      
      dispatch(Action(type.COMMENTS_ADD, Comments))
    })
  }, [])

  return (
    <View>
      <Detail />
>>>>>>> origin/DetailComponent
    </View>
  )
}

export default App