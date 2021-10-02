import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { selectTravelTime } from '../reducers/rootReducer';

const data = [
    {
        id: '1',
        name: 'Uber mini',
        rate: 1,
        image: 'https://i.ibb.co/42G039m/3pn.png'
    },
    {
        id: '2',
        name: 'Uber XL',
        rate: 1.5,
        image: 'https://i.ibb.co/42G039m/3pn.png'
    },
    {
        id: '3',
        name: 'Uber LUX',
        rate: 3,
        image: 'https://i.ibb.co/42G039m/3pn.png'
    }
]

const RideOptions = () => {
    const navigate = useNavigation()
    const travelTime = useSelector(selectTravelTime)
    try {
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{justifyContent:'center', margin: 10 }} onPress={() => {
                        navigate.goBack()
                    }}>
                        <Ionicons name="chevron-back" size={25}></Ionicons>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 25, margin: 10 }}>Select a ride - {travelTime.distance.text}</Text>


                </View>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <FlatList data={data} keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin:10 }}>
                                <View style={{flexDirection:'row'}}>
                                    <Image resizeMode='stretch' source={{ uri: item.image }} style={{ height: 80, width: 80 }} />

                                    <Text style={{ color: 'black', alignSelf: 'center' }}>{item.name}{'\n'}
                                        <Text>{travelTime.duration.text}</Text>
                                    </Text>
                                </View>

                                <Text style={{ color: 'black', alignSelf: 'center' }}>Rs.{item.rate * travelTime.duration.value}</Text>

                            </TouchableOpacity>
                        } >

                    </FlatList>
                </View>
            </SafeAreaView>
        )
    } catch (error) {
        console.log('error', error);
    }

}

export default RideOptions
