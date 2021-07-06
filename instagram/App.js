import React, {useEffect} from 'react'
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

  useEffect(() => {

    // Firebase.register("lion@live.fr","123456").then(resul => {

    //   console.log(resul)
    // }).catch( error => {

    //   console.log(error)
    // })

  }, [])

  

  

  return (
    <View style={{flex: 1}}>
      <Login/>
    </View>
  )
}

export default App
