import React from 'react'
import { View, Text } from 'react-native'

/* import redux */
import { useSelector } from 'react-redux'

/* import components */
import Hedaer from './components/Header'
import Login from './components/Login'

const App = () => {

  const Firebase = useSelector(state => state.Firebase)

  Firebase.queryGallery().onSnapshot(query => {
      
    query.forEach(element => {

        console.log(element.data())
    });
  })

  return (
    <View style={{flex: 1}}>
      <Login/>
    </View>
  )
}

export default App
