/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useContext, useState } from 'react';
 import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
   View,
   Text
 } from 'react-native';

 
 import { styles } from '../style/Style'
 
 //holds settings
 import { SettingsContext } from '../navigation/RootStackScreen';
 
 function ColorsScreen() {
   const [settings, setSettings] = useContext(SettingsContext);
   const [color, setColor] = useState('blue');

   const isDarkMode = useColorScheme() === 'dark';
    return (
       <SafeAreaView style={{flex: 1}}>
         <StatusBar />
         <View style={styles.container}>
          <View style={{width: 200, backgroundColor: 'rgb(2, 76, 182)', margin: 20, borderRadius: 20}}>
            <Text style={{color: 'white', textAlign: 'center', padding: 20, fontSize: 20}}>
              Color Preview
            </Text>
          </View>
         </View>
       </SafeAreaView>
     )
 };
 
 export default ColorsScreen;
 