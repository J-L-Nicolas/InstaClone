import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

    bodyFeed: {
       
        paddingTop: 10
    },
    ItemBody: {

        alignItems: "center",
    },
    bodyUserStatus : {

        backgroundColor: "#000099",
        width: 80,
        height: 80,
        borderRadius:40,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    bgItem: {

        width: 80,
        height: 80,
        borderRadius: 40,
    },
    /* feed elements */
    feedItemBody:{
        alignItems: "center",
        marginVertical: 20,
        elevation: 3
    },
    bgFeedItem:{
        width: "90%",
        height: 300
    }
})

export default style