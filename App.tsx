/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const statusBarStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: 50,
    width: '100%'
  };

  const bottomStyle = {
    height: 35,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 0,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const adStyle = {
    height: 50,
    width: '100%',
    backgroundColor: 'rgb(2, 76, 182)'//rgb(255, 204, 2)'//rgb(5, 121, 255)'
  }

  return (
    <View style={styles.container}>
      <View style={statusBarStyle}></View>
      <View style={styles.container}>
        <Text style={styles.timeText} >12:00:00 PM</Text>
        <Text style={styles.dateText} >Thursday, December 30</Text>
      </View>
      <View style={adStyle}></View>
      <View style={bottomStyle}>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(2, 76, 182)'//rgb(189, 134, 9)'//rgb(255, 204, 2)'//rgb(5, 121, 255)'
  },
  timeText: {
    fontSize: 75,
    textAlign: "center",
    color: 'white',
    margin: 10,
  },
  dateText: {
    fontSize: 50,
    textAlign: "center",
    color: 'white',
    margin: 10,
  },
})

export default App;
