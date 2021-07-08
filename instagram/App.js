import React, { useEffect } from 'react'
import { View } from 'react-native'

/* import redux */
import { useSelector, useDispatch } from 'react-redux'

/* import components */
import Detail from './components/Detail'
import Action, { type } from './Redux/Action'

const App = () => {

  const Firebase = useSelector(state => state.Firebase)
  const dispatch = useDispatch()

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
    </View>
  )
}

export default App