import React from 'react'
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux';
import { setStart, setDestination } from '../reducers/rootReducer';
export default function HomeScreen() {
    const dispatch = useDispatch()

    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Image resizeMode='contain' style={styles.appLogo} source={{ uri: 'https://i.ibb.co/19cmbGM/2560px-Uber-logo-2018-svg.png' }} />
                <View style={{ margin: 10 }}>
                    <GooglePlacesAutocomplete
                        styles={{
                            margin: 10, container: {
                                flex: 0
                            }
                        }}
                        debounce={400}
                        onFail={(eror) => {
                            console.log('data onFail', eror);

                        }}
                        onTimeout={() => {
                            console.log('on timeout===');
                        }}
                        fetchDetails={true}
                        placeholder='Where to '
                        nearbyPlacesAPI='GooglePlacesSearch'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            dispatch(setStart({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            dispatch(setDestination(null))
                        }}
                        query={{
                            key: MAPS_API_KEY,
                            language: 'en',
                        }}
                    />
                </View>
                <NavOptions>
                </NavOptions>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        margin: 5
    },
    appLogo: {
        height: 120, width: 120
    }
})
