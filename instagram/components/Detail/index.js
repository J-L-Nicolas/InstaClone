import React, { Component, useState } from "react";
import { SafeAreaView, View, Image, Text, TextInput, Pressable, FlatList } from "react-native";
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

/* import components */
import Header from '../Header'
import { useSelector } from "react-redux";

  

const detail = () => {
    
    const Comments = useSelector(state => state.Comments)

    const [user, setUser] = useState("sans graisse")
    const [Comment, setComment] = useState("")

    const [text, onChangeText] = React.useState(null);

    console.log("lol", Comments)

    // user du commentaire + commentaire;

    const test = () => {
        console.log("TEST OK")
    }

    const renderItem = ({ item }) => (
        <Text style={styles.textGris} > {item.commentaire} </Text>
    );

    return (

        <SafeAreaView style={styles.container}>
            
            <Header />

            <View>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={{uri: 'https://www.moto-dz.com/wp-content/uploads/2015/08/fond-d%C3%A9cran-moto-dz-vue4.jpg',}}
                />
                <View style={styles.horizontal}>
                    <Icon style={styles.icons}
                        raised
                        name='heart'
                        type='font-awesome'
                        color='#f50'
                        size={20}
                        onPress={() => console.log('like')} 
                    />
                    <Icon style={styles.icons}
                        name='comment'
                        type='font-awesome'
                        color='#f50'
                        size={20}
                        onPress={() => console.log('commentaire')} 
                    />
                    <Icon style={styles.icons, styles.reglD}
                        name='bookmark'
                        type='font-awesome'
                        color='#f50'
                        size={20}
                        onPress={() => console.log('enregistrement')} 
                    />
                </View>
            </View>

            <View style={styles.margin}>
                <Text style={styles.textGris}> Voir tout les commentaires</Text>

                <FlatList
                    data={Comments}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <View>
                    <View style={styles.horizontal}>
                        <Text style={styles.textGris}> user {user} </Text>
                        <Text style={styles.textGris}> commentaire {Comment} </Text>
                    </View>
                    <View style={styles.horizontal}>
                        <Text style={styles.textGris}> date {} </Text>
                        <Pressable 
                        style={styles.presable}
                        onPress={ test, () => console.log('Publier') }>
                            <Text style={styles.textGris}> Repondre {} </Text>
                        </Pressable>
                        
                    </View>
                </View>

                <View style={styles.publier}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="commenter ici"
                        // keyboardType='defaut'
                    />
                    
                    <Pressable 
                        style={styles.presable}
                        onPress={ () => console.log('Publier') }>
                            <Text style={styles.textBlue}> Publier </Text>
                    </Pressable>
                </View>
            </View>


        </SafeAreaView>
    )

};

export default detail;