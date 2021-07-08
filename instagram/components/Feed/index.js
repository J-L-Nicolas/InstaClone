import React ,  {useEffect}from 'react'
import { View, Text, Image ,FlatList} from 'react-native'
import style from '../Header/styles'
import styles from './styles'
import { useSelector , useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
//import Header from '../Header'

const Feed = () => {

    const Firebase = useSelector(state => state.Firebase)
    const ListContact = useSelector(state => state.Contacts)
    // console.log(ListContact)

    const FeedGallery = useSelector(state => state.FeedGallery)
    //console.log(FeedGallery)
  

    //Vue de la liste de Contacts
    const renderItem = (User) => {
        // console.log(User)
        return(
            
        <View style={styles.bodybulle}>  
            <Image 
                source={{   uri :User.item.avatar_url}}  
                style={styles.bulleContact}
            />
             <Text 
             style={styles.TextStyle}>{User.item.name}
             </Text>
        </View>
        )
    }


    // liste des publication
    const Publication = (User) => {
        // console.log(User)

        const urlContact = ListContact.filter(element => element.id == User.item.user)

        // console.log("url",urlContact)
        
        return(
            
        <View> 

           <View style={styles.HeaderPublicationi}>
             <Image 
                source={{   uri :urlContact[0].avatar_url}}  
                style={styles.bulle}
            />

            <Text 
            style={styles.TextStyle}>{User.item.user}
            </Text>
            </View>

            <Image
                source={{   uri :User.item.photo}} 
                style={styles.image}
            /> 

            <Icon 
                name={"heart-o"} 
                style={styles.StyleFavorite} 
                size={20}
            />

        </View>
        )
    }
    

    return (

        <View 
        style={styles.vue}
        >
            <View>
                <FlatList
                    data={ListContact}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                 />
            </View>     
            <View>
            <FlatList
                    data={FeedGallery}
                    renderItem={Publication}
                    keyExtractor={item => item.id}
                    horizontal={false}                
                 />
            </View>
        </View>


    )
}

export default Feed
