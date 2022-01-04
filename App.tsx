/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';


import RootStackScreen from './RootStackScreen'

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  );
}

export default App;

