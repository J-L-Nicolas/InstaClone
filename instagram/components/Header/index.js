import React from 'react'
import { View, Text } from 'react-native'
import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from './styles'

const Header = () => {

    return (
        <View styles={styles.colorHeader} >
            <Text styles={styles.textHeader}>Detail</Text>
        </View>
    )
}

export default Header
