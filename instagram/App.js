import React from 'react'
import { View, Text } from 'react-native'

/* inport install components */
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
  
  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <View>
      <Text>APP Super{myIcon}</Text>
    </View>
  )
}

export default App
