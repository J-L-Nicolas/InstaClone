import React ,  {useEffect,useState}from 'react'
import { View, Text, Image ,FlatList,Pressable} from 'react-native'
import style from '../Header/styles'
import styles from './styles'
import { useSelector , useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
//import Header from '../Header'

const Feed = () => {

    //init firebase
    const Firebase = useSelector(state => state.Firebase)
    const ListContact = useSelector(state => state.Contacts)
    const FeedGallery = useSelector(state => state.FeedGallery)

    // state Favoris
    const [Favorite, setFavorite] = useState(false)

    //Vue de la liste de Contacts
    const renderItem = (User) => {   

        return(
                
            <View style={styles.bodybulle} >  
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

      // affichage d'icone favoris 
    const FavoriteIcon = (Favorite == true) ? (
        <Icon 
            name={"heart"} 
            style={styles.StyleFavorite} 
            color="red"
            size={20}
        />
    ) : (
        <Icon 
            name={"heart-o"} 
            style={styles.StyleFavorite}
            color="white"
            size={20}
        />
    )

     //fonction de changement d'etat favoris 
    const ChangeFavorite = () => {
        setFavorite(!Favorite)
        console.log(Favorite)
    }

    // liste des publication
    const Publication = (User) => {

        const urlContact = ListContact.filter(element => element.id == User.item.user)[0]
        
        return(
            
            <View style={{flex: 1}}> 

                <View style={styles.HeaderPublicationi}>

                    <Image 
                        source={{   uri :urlContact.avatar_url}}  
                        style={styles.bulle}
                    />

                    <Text 
                        style={styles.TextStyle}>{urlContact.name}
                    </Text>

                </View>

                    <Pressable onPress={ChangeFavorite}>

                        <Image
                            source={{   uri :User.item.photo}} 
                            style={styles.image}

                        /> 

                </Pressable>

                {FavoriteIcon}

            </View>
        )
    }

    return (

        <View style={styles.vue}>

            <View >
                <FlatList
                    data={ListContact}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                 />
            </View>  

            <View style={{flex: 1}} >
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
