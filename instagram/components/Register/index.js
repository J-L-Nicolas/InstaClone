import React, {useState , useEffect} from 'react'
import { View, Text, Image,  TextInput , Button , Pressable } from 'react-native'
import styles from './styles'

/* import redux */
import { useSelector } from 'react-redux'

const Register = () => {

    /* selector */
    const Firebase = useSelector(state => state.Firebase)

    /* Effect */
    useEffect(() => {

        setMsgError(null)

    }, [email, password])

    /* state */
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [msgError, setMsgError] = useState(null)

    /* function */
    const connexion = () => {

        if (email != "" && password != "" && name != ""){

            Firebase.register(email, password).then(result => {

                const tempId = result.uid
                
                Firebase.contactsGallery().doc(tempId).set(
                   {
                    avatar_url:"https://firebasestorage.googleapis.com/v0/b/food-app-2da2f.appspot.com/o/images%2F2kK3KhLjRQZcu4HvTp78%2Fimage.jpg?alt=media&token=04354a80-7a42-4088-9dfe-f99144d98686",
                    favoris: true,
                    name: name,
                    subtitle: "new user" 
                   } 
                )

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
        <View style={styles.bodyRegister}>
         
            <Image
                source={require('../../Assets/Images/bg_register.jpg')}
            />

            <View style={styles.bodyLogo}>

                <Image style={styles.Logo}
                    source={require('../../Assets/Images/logo_Insta.png')}
                />

            </View>

            <View style={styles.bodyForm}>
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={(e)=>{setName(e); setMsgError(null)}}
                    value={name}
                    onSubmitEditing={connexion}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(e)=>{setemail(e); setMsgError(null)}}
                    value={email}
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
                    <Text style={{color: "#FFFFFF"}}>Register</Text>
                </Pressable>
                {DisplayError}
            </View>
         
        </View>
    )
}

export default Register
