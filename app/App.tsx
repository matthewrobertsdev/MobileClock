/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';


import RootStackScreen from './navigation/RootStackScreen'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : DefaultTheme
  return (
    <NavigationContainer theme={theme}>
      <RootStackScreen/>
    </NavigationContainer>
  );
}

export default App;

