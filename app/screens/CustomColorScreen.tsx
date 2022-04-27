/**
 * Spiffy Clock Custom Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useContext} from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import ColorPicker from 'react-native-wheel-color-picker'

import { getHexColorString } from '../style/Colors';
import { SettingsContext } from '../navigation/RootStackScreen';

 
 function CustomColorScreen({navigation}) {

  const [settings, setSettings] = useContext(SettingsContext);
  

  const [color, setColor]=useState(getHexColorString(settings.customRed, settings.customGreen, settings.customBlue))
  const [loaded, setLoaded]=useState(false)

  useEffect(()=>{
    setLoaded(true)
  }, [loaded])

    return (
       <SafeAreaView style={{flex: 1}}>
          <StatusBar/>
       </SafeAreaView>
     )

    function onColorChange(color){
      setColor(color)
    }
 };
 
 export default CustomColorScreen;
 