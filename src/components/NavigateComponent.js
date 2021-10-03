import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../reducers/rootReducer'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavigateComponent = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ borderTopWidth: 1, borderTopColor: 'gray', flex: 1 }}>
                <GooglePlacesAutocomplete
                 styles={{
                    margin: 10, container: {
                        flex: 0, margin:10
                    }
                }}
                    placeholder='Where to'
                    debounce={400}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    fetchDetails={true}
                    query={{
                        key: MAPS_API_KEY,
                        language: 'en'
                    }}
                    onPress={(data, details) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }))
                         navigation.navigate('RideOptions')
                    }}
                >
                </GooglePlacesAutocomplete>

            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-evenly' }}>
                <TouchableOpacity onPress={()=>{
                        navigation.navigate('RideOptions')

                }} style={{padding:10, flexDirection:'row', backgroundColor:'black', borderRadius:10, alignItems:'center'}}>
                    <Ionicons name='car' color='white'></Ionicons>
                    <Text style={{color:'white'}}> Ride </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding:10, flexDirection:'row', backgroundColor:'black', borderRadius:10, alignItems:'center'}}>
                    <Ionicons name='fast-food' color='white'></Ionicons>
                    <Text style={{color:'white'}}> Eat </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateComponent
