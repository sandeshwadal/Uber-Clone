/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar, View } from 'react-native';
import { store } from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/screens/MapScreen';

const stackNavigator = createNativeStackNavigator()

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content'></StatusBar>
        <Provider store={store}>
          <NavigationContainer>

            <stackNavigator.Navigator>
              <stackNavigator.Screen
                name='Home'
                component={HomeScreen} options={{ headerShown: false }}>

              </stackNavigator.Screen>
              <stackNavigator.Screen
                name='MapScreen'
                component={MapScreen} options={{ headerShown: false }}>

              </stackNavigator.Screen>
            </stackNavigator.Navigator>
          </NavigationContainer>

        </Provider>
      </View>
    );
  }
}

