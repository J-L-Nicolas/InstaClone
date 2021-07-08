import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

    // container : { backgroundColor: '#000000', },
    bodyDetail: { width          : '100%', },
    flex1     : { flex           : 1, },
    margin    : { margin         : 10 },

    image: {
        width: '100%',
        height: 362,
    },

    horizontal: {
        alignItems     : 'center',
        // backgroundColor: '#404040',
        // borderColor    : '#FFFFFF',
        // borderRadius   : 50,
        // borderWidth    : 1,
        flexDirection  : 'row',
        // justifyContent : 'space-between',
        justifyContent : 'flex-start',
        margin         : 5,
        // margin         : 15,
        paddingLeft    : 8,
        // width          : 100,
    },
    icons: {
        margin: 5
    },
    textGris: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textBlue: {
        color: '#00AEFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    /* ********** INPUTS COMMENTAIRE ********** */
    publier: {
        backgroundColor: '#404040',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        // width: 100,
        // paddingLeft: 8,
        margin: 15,
    },
    textInput: {
        // borderRadius: 50,
        // borderWidth: 1,
        // borderColor: "rgba(201,21,21,1)",
        color: '#FFFFFF',
        fontFamily: "roboto-regular",
        fontSize: 20,
        // height: 35,
        // height: 40,
        // left: 16,
        // margin: 12,
        // position: "absolute",
        paddingLeft: 16,
        top: 0,
        // width: '70%',
    },
    presable: {
        paddingRight: 16,
    }
    
})

export default style