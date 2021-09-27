import React from 'react'
import { View, SafeAreaView } from 'react-native'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateComponent from '../components/NavigateComponent';
import RideOptions from '../components/RideOptions';

const stackNavigator = createNativeStackNavigator()

export default function MapScreen() {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Map></Map>
            </View>
            <View style={{ flex: 1 }}>
                <stackNavigator.Navigator>
                    <stackNavigator.Screen
                        name='NavigateComponent'
                        component={NavigateComponent}
                        options={{ headerShown: false }}>

                    </stackNavigator.Screen>
                    <stackNavigator.Screen
                        name='RideOptions'
                        component={RideOptions}
                        options={{ headerShown: false }}>

                    </stackNavigator.Screen>
                </stackNavigator.Navigator>
            </View>
        </SafeAreaView>
    )
}
