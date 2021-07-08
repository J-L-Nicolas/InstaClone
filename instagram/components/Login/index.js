import React, {useState , useEffect} from 'react'
import { View, Text, Image,  TextInput , Button , Pressable } from 'react-native'
import styles from './styles'

/* import redux */
import { useSelector } from 'react-redux'

const Login = () => {

    /* selector */
    const Firebase = useSelector(state => state.Firebase)
    
    /* Effect */
    useEffect(() => {

        setMsgError(null)

    }, [login, password])

    /* state */
    const [login, setlogin] = useState("")
    const [password, setpassword] = useState("")
    const [msgError, setMsgError] = useState(null)

    /* function */
    const connexion = () => {

        if (login != "" && password != ""){

            Firebase.login(login, password).then(result => {

                console.log(result)
            }).catch(error => {

                setMsgError(error)
            })
            setpassword("")
        }
    }
    
    /* display msg Eroor */
    const DisplayError = msgError && (
        <Text>{msgError.message}</Text>
    )
    

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
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(e)=>{setlogin(e); setMsgError(null)}}
                    value={login}
                    onSubmitEditing={connexion}
                />
                 <TextInput
                 placeholder="Password"
                 secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(e)=>{setpassword(e); setMsgError(null)}}
                    value={password}
                    onSubmitEditing={connexion}
                />
                <Pressable style={styles.btn} onPress={connexion}>
                    <Text style={{color: "#FFFFFF"}}>Connexion</Text>
                </Pressable>
                {DisplayError}
            </View>
         
        </View>
    )
}

export default Login
