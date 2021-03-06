import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
const data = [
    {
        id: '1',
        title: 'Get a ride',
        imageurl: 'https://i.ibb.co/42G039m/3pn.png',
        screen: 'MapScreen'
    },
    {
        id: '2',
        title: 'Order food',
        imageurl: 'https://i.ibb.co/x55Mmnd/28w.png',
        screen: 'OrderFood'
    }
]
export default function NavOptions() {
    const navigation = useNavigation()
    return (

        <FlatList style={styles.flatlist} horizontal={true} keyExtractor={(item) => item.id} data={data} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
                try {

                    if (item.screen == 'MapScreen') {
                        navigation.navigate(item.screen)
                    }
                } catch (error) {
                    //   console.log('errrrr', error);
                }

            }} style={styles.flatListItem}>
                <Image resizeMode='contain' style={styles.itemImage} source={{ uri: item.imageurl }} />
                <Text style={styles.itemText}>{item.title}</Text>
                <Ionicons name={'arrow-forward-circle'} size={25}></Ionicons>
            </TouchableOpacity>
        )}>
        </FlatList>

    )
}

const styles = StyleSheet.create({
    flatListItem: {
        alignItems: 'center', margin: 10
    },
    itemImage: {
        height: 120, width: 120,
    },
    itemText: {
        textAlign: 'center'
    },
    flatlist:{
        margin:10, padding:10
    }
})