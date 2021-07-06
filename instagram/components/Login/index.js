import React, {useState} from 'react'
import { View, Text, Image,  TextInput , Button , Pressable } from 'react-native'
import styles from './styles'

const Login = () => {

    /* state */
    const [login, setlogin] = useState("")
    const [password, setpassword] = useState("")

    return (
        <View style={styles.bodyLogin}>
         
            <Image
                source={require('../../Assets/Images/bg_login.jpg')}
            />

            <View style={styles.bodyLogo}>

                <Image style={styles.Logo}
                    source={require('../../Assets/Images/logo_Insta.png')}
                />

            </View>

            <View style={styles.bodyForm}>
                <TextInput
                    placeholder="Login"
                    style={styles.input}
                    onChangeText={setlogin}
                    value={login}
                />
                 <TextInput
                 placeholder="Password"
                    style={styles.input}
                    onChangeText={setpassword}
                    value={password}
                />
                <Pressable style={styles.btn}>
                    <Text>Connexion</Text>
                </Pressable>
            </View>
         
        </View>
    )
}

export default Login
