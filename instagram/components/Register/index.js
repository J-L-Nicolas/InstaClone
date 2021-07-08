import React, {useState , useEffect} from 'react'
import { View, Text, Image,  TextInput , Button , Pressable } from 'react-native'
import styles from './styles'

/* import redux */
import { useSelector } from 'react-redux'

const Register = () => {

    /* selector */
    const Firebase = useSelector(state => state.Firebase)

    // useEffect(() => {
    //     Firebase.queryGallery().doc("4J4tDf8GrK98WVsYXttw").update(
    //         {
    //             active : false,
    //             date: 12233,
    //             description: "first",
    //             photo: "https://eko-events.fr/wp-content/uploads/2016/01/eko_events_le_groupe_la_poste-4-min-1.jpg",
    //             user: "0cXy4XavdwHcyLC54qO3",
    //         }
    //      )
    // }, [])

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
                    avatar_url:"https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
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
