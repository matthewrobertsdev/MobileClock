/**
 * Spiffy Clock Custom Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { SafeAreaView, StatusBar } from 'react-native';

 import ColorPicker from 'react-native-wheel-color-picker'
 
 function CustomColorScreen() {

    return (
       <SafeAreaView style={{flex: 1}}>
          <StatusBar/>
          <ColorPicker style={{margin: 20}} swatches={false} thumbSize={30}
					sliderSize={30}/>
       </SafeAreaView>
     )
 };
 
 export default CustomColorScreen;
 