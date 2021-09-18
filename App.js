/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar,View,Text } from 'react-native';
import { store } from './src/store';
import HomeScreen from './src/screens/HomeScreen';


export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1}}>
        <StatusBar barStyle='light-content'></StatusBar>
        <Provider store={store}>
          <HomeScreen></HomeScreen>
        </Provider>
      </View>
    );
  }
}

