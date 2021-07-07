import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

    bodyRegister: {

       alignItems: "center",
       height: "100%",
       position: "relative",
       backgroundColor: "#d4dce3",
    },
    bodyLogo:{

        position: "absolute",
        top: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    Logo :{

        width:200,
        height: 200,
    },
    bodyForm:{

        position: "absolute",
        backgroundColor: "#d4dce3",
        top: 300,
        height: 400,

        width: "100%",

        borderTopRightRadius: 100,

        justifyContent: "center",
        alignItems: "center",
    },
    input:{

        height: 40,
        width: "70%",
        margin: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingLeft: 20
    },
    btn:{
        backgroundColor: "#6929ff",
        paddingHorizontal: 50,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        marginTop: 20,
        color: "#FFFFFF"
    }
})

export default style