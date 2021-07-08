import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

    bodyLogin: {

       alignItems: "center",
       height: "100%",
       position: "relative",
       backgroundColor: "#e3dcd4",

    },
    bodyLogo:{

        position: "absolute",
        top: 80,
        justifyContent: "center",
        alignItems: "center",

    },
    image: {
        
        width: '100%',
        height: 362,   
        marginBottom:10
        
    },

    vue:{

        justifyContent: "center",
        backgroundColor:"black",
        flex:1,

    },

    bodybulle:{
        flex:1,
        alignItems:"center"
    },

    bulle:{
        borderRadius:40, 
        width:35,
        height:35,
        marginHorizontal: 5,
        marginVertical:10,
        
    },

    AvatarUrl: {
        
        width: '100%',
        height: 150, 
    },
    bulleContact:{
        borderRadius:40, 
        width:60,
        height:60,
        marginHorizontal: 5,
        marginVertical:10
    },

    HeaderPublicationi:{

        flexDirection:"row",
        alignItems:"center",
        marginTop:5


    },
    TextStyle:{
     color:"#FFF"   
    },
    StyleFavorite:{
        // color:"#FFF",
        marginStart:10
    }


    
})

export default style