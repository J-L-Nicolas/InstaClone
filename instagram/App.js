import React, {useEffect} from 'react'
import { View } from 'react-native'

/* import redux */
import { useSelector , useDispatch } from 'react-redux'
import Action, {type} from './Redux/Action'

/* import components */
import Hedaer from './components/Header'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {

  /* init const redux */
  const Firebase = useSelector(state => state.Firebase)
  const dispatch = useDispatch()

  useEffect(() => {

    Firebase.contactsGallery().onSnapshot(query => {

      let TempContact = []
      
      query.forEach(element => {
  
        TempContact = [...TempContact, {id: element.id ,...element.data()}]
      });
      console.log("TempContact", TempContact)
      dispatch(Action(type.CONTACTS_ADD_CONTACT, TempContact))

    })
  }, [])

  return (
    <View style={{flex: 1}}>
     <Register/>
    </View>
  )
}

export default App
