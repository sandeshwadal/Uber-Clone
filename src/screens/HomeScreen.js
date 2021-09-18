import React from 'react'
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import NavOptions from '../components/NavOptions'
export default function HomeScreen() {
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Image resizeMode='contain' style={styles.appLogo} source={{ uri: 'https://i.ibb.co/19cmbGM/2560px-Uber-logo-2018-svg.png' }} />
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
    appLogo:{
        height: 200, width: 200
    }
})
