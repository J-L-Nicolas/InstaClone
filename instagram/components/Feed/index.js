import React, {Fragment} from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import styles from './styles'

/* import redux  */
import { useSelector } from 'react-redux'

const Feed = () => {

    const Contacts = useSelector(state => state.Contacts)

    const renderItem = (items) => {
        const user = items.item
        return(
            <View style={styles.ItemBody}>
                <View style={styles.bodyUserStatus}>
                <Image source={{uri: user.avatar_url}} style={styles.bgItem}/>
                </View>
                    <Text>{user.name}</Text>
            </View>
        )
    }

    const renderFeedIrem = (items) => {
    
        const feedItems = items.item
        return(
            <View style={styles.feedItemBody}>
                <Image source={{uri: feedItems.photo}} style={styles.bgFeedItem}/>
            </View>
        )
    }
    

    const data = [
        {active: false, date: 12233, description: "Ma description", photo: "https://logos-marques.com/wp-content/uploads/2021/01/Huawei-logo.png",user: "uid", id : 78},
        {active: false, date: 12233, description: "Ma description", photo: "https://assets.turbologo.com/blog/fr/2019/11/19134048/gaming-logo-cover-958x575.jpg",user: "uid", id : 79},
        {active: false, date: 12233, description: "Ma description", photo: "https://image.freepik.com/vecteurs-libre/ensemble-vecteur-idees-conception-logo-societe_53876-62233.jpg",user: "uid", id : 80},
    ]
    
    
    return (
        <View style={styles.bodyFeed}>
            <View>
                <FlatList
                    data={Contacts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderFeedIrem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Feed
