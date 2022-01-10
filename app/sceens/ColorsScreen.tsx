/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';


import { styles } from '../style/Style'

//holds settings
import { SettingsContext } from '../navigation/RootStackScreen';
import { colorNames, darkColors, getBackgroundColor, getTextColor, lightColors, lightDarkBackground } from '../style/Colors';
import ButtonWithMargin from '../components/ButtonWithMargin';
import SwitchWthText from '../components/SwitchWithText';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ColorsScreen({navigation}) {
  const [color, setColor]=useState('Blue')
  const [textColor, setTextColor]=useState('black')

  const saveColorChoice = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('colorChoice', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const [settings, setSettings] = useContext(SettingsContext);
  const saveColorForForeground = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('colorForForeground', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const saveUsesNightMode = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('useNightMode', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const toggleUsesNightMode = () => {
    saveUsesNightMode(!settings.usesNightMode)
    setSettings({ ...settings, usesNightMode: !settings.usesNightMode })
  }

  const useColorForForegound = () => {
    saveColorForForeground(true)
    setSettings({ ...settings, colorForForeground: true })
  }

  const useColorForBackground = () => {
    saveColorForForeground(false)
    setSettings({ ...settings, colorForForeground: false })
  }

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(()=>{
    //color
    setTextColor(getTextColor(settings, isDarkMode))
    setColor(getBackgroundColor(settings, isDarkMode))
  }, [settings, isDarkMode])

  const ColorCell = (props) => (
    <TouchableOpacity style={{
      width: 300, height: 70,
      backgroundColor: isDarkMode ? lightDarkBackground : 'white',
      flexDirection: 'row', alignItems: 'center', margin: 10, borderRadius: 20
    }} onPress={props.onPress}>
      <View style={{
        backgroundColor:
          props.color,
        width: 50, height: 50, borderRadius: 20,
        margin: 10
      }} />
      <Text style={{ fontSize: 20, margin: 10, color: isDarkMode ? 'white' : 'black' }}>
        {props.colorName}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {/* Color preview background and text */}
      <View style={{
        ...styles.colorPreview, backgroundColor: color,
        marginLeft: 'auto', marginRight: 'auto'
      }}>
        <Text style={{ ...styles.colorPreviewText, color: textColor }}>
          Color Choice
        </Text>
      </View>
      <ScrollView>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <ButtonWithMargin text='Use Color for Background' onPress={useColorForBackground} />
          <ButtonWithMargin text='Use Color for Foreground' onPress={useColorForForegound} />
          <SwitchWthText text='Use Night Mode in Dark Mode'
            toggleSwitch={toggleUsesNightMode} isEnabled={settings.usesNightMode} />
          {colorNames.map(colorName => <ColorCell colorName={colorName}
            color={getColor(colorName)}
            key={colorName} onPress={() => {
              saveColorChoice(colorName)
              setSettings({ ...settings, colorChoice: colorName })
            }} />)}
          <ButtonWithMargin text='Choose Custom Color...' 
          onPress={()=>navigation.navigate("Custom Color")}/>
          <ColorCell colorName={'Custom Color'}
            color='gray'
            key='Custom Color' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
  function getColor(colorName) {
    if (settings.colorForForeground) {
      if (settings.usesNightMode && isDarkMode) {
        return darkColors[colorName]
      } else {
        return lightColors[colorName]
      }
    } else {
      return isDarkMode ? darkColors[colorName] : lightColors[colorName]
    }
  }
};

export default ColorsScreen;
