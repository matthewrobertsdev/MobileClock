/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View,
  Text, ScrollView, TouchableOpacity } from 'react-native';

import { styles } from '../style/Style'

//holds settings
import { SettingsContext } from '../navigation/RootStackScreen';
//colors
import { brightColors, colorNames, darkColors, getBackgroundColor, getTextColor, lightColors, lightDarkBackground } from '../style/Colors';
//components
import ButtonWithMargin from '../components/ButtonWithMargin';
import SwitchWthText from '../components/SwitchWithText';
//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

function ColorsScreen() {
  const [color, setColor]=useState(['rgb(2, 76, 182)', 'rgb(2, 76, 182)'])
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
  const saveUsesGradient = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('usesGradient', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const saveUsesNightMode = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('usesNightMode', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const saveUsesBrightMode = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('useBrightMode', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const toggleUsesNightMode = () => {
    saveUsesNightMode(!settings.usesNightMode)
    setSettings({ ...settings, usesNightMode: !settings.usesNightMode })
  }


  const toggleUseGradient = () => {
    saveUsesGradient(!settings.usesGradient)
    setSettings({ ...settings, usesGradient: !settings.usesGradient })
  }

  const toggleUsesBrightMode = () => {
    saveUsesBrightMode(!settings.usesBrightMode)
    setSettings({ ...settings, usesBrightMode: !settings.usesBrightMode })
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
      width: 300,
      backgroundColor: isDarkMode ? lightDarkBackground : 'white',
      flexDirection: 'row', alignItems: 'center', margin: 10, borderRadius: 20
    }} onPress={props.onPress}>
      <LinearGradient style={{
        width: 40, height: 40, borderRadius: 10,
        margin: 10, borderStyle: 'solid', borderWidth: 0.5, 
        borderColor: isDarkMode ? 'white' : 'black'
      }} colors={props.color}/>
      <Text style={{ fontSize: 20, margin: 10, color: isDarkMode ? 'white' : 'black' }}>
        {props.colorName}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {/* Color preview background and text */}
      <LinearGradient style={{
        ...styles.colorPreview, backgroundColor: "transparent",
        marginLeft: 'auto', marginRight: 'auto', borderStyle: 'solid', borderWidth: 0.5, 
        borderColor: isDarkMode ? 'white' : 'black'
      }} colors={color} accessibilityLabel={"Color preview"}>
        <Text style={{ ...styles.colorPreviewText, color: textColor }}>
          Color Choice
        </Text>
      </LinearGradient>
      <ScrollView>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <ButtonWithMargin text='Use Color for Background' onPress={useColorForBackground} />
          <ButtonWithMargin text='Use Color for Foreground' onPress={useColorForForegound} />
          <SwitchWthText text='Use Color Gradient'
            toggleSwitch={toggleUseGradient} isEnabled={settings.usesGradient} />
          <SwitchWthText text='Use Night Mode in Dark Mode'
            toggleSwitch={toggleUsesNightMode} isEnabled={settings.usesNightMode} />
          {/*<SwitchWthText text='Use Bright Mode in Light Mode'
            toggleSwitch={toggleUsesBrightMode} isEnabled={settings.usesBrightMode} />*/}
          {colorNames.map(colorName => <ColorCell colorName={colorName}
            color={getColor(colorName)}
            key={colorName} onPress={() => {
              saveColorChoice(colorName)
              setSettings({ ...settings, colorChoice: colorName })
            }} />)}
            {/*
          <ButtonWithMargin text='Choose Custom Color...' 
          onPress={()=>navigation.navigate("Custom Color")}/>
          <ColorCell colorName={'Custom Color'}
            color={getRgbString(settings.customRed, settings.customGreen, settings.customBlue)}
            key='Custom Color' />
            */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
  function getColor(colorName) {
    if (settings.colorForForeground) {
      if (colorName === 'System') {
        return isDarkMode ? ['white', 'white'] : ['black', 'black']
      } if (settings.usesNightMode && isDarkMode) {
        return [darkColors[colorName], darkColors[colorName]]
      } else {
        return [lightColors[colorName], lightColors[colorName]]
      }
    } else if (settings.usesGradient){
      switch(colorName) {
        case "Red": 
      return isDarkMode ? [darkColors["Orange"],  darkColors["Red"]] :
        [lightColors["Orange"],  lightColors["Red"]]
        case "Orange": 
      return isDarkMode ? [darkColors["Yellow"],  darkColors["Orange"]] :
        [lightColors["Yellow"],  lightColors["Orange"]]
        case "Yellow": 
      return isDarkMode ? [darkColors["Orange"],  darkColors["Yellow"]] :
        [lightColors["Orange"],  lightColors["Yellow"]]
        case "Green": 
      return isDarkMode ? [darkColors["Blue"],  darkColors["Green"]] :
        [lightColors["Blue"],  lightColors["Green"]]
      case "Blue": 
      return isDarkMode ? [darkColors["Purple"],  darkColors["Blue"]] :
        [lightColors["Purple"],  lightColors["Blue"]]
        case "Indigo": 
      return isDarkMode ? [darkColors["Purple"],  darkColors["Indigo"]] :
        [lightColors["Purple"],  lightColors["Indigo"]]
        case "Purple": 
      return isDarkMode ? [darkColors["Pink"],  darkColors["Purple"]] :
        [lightColors["Pink"],  lightColors["Purple"]]
        case "Pink": 
      return isDarkMode ? [darkColors["Red"],  darkColors["Pink"]] :
        [lightColors["Red"],  lightColors["Pink"]]
        case "Brown": 
      return isDarkMode ? [darkColors["Yellow"],  darkColors["Brown"]] :
        [lightColors["Yellow"],  lightColors["Brown"]]
        case "Black": 
      return isDarkMode ? [darkColors["Gray"],  darkColors["Black"]] :
      [lightColors["Gray"],  lightColors["Black"]]
      case "Gray": 
      return isDarkMode ? [darkColors["Black"],  darkColors["Gray"]] :
      [lightColors["White"],  lightColors["Gray"]]
      case "White": 
      return isDarkMode ? [darkColors["Gray"],  darkColors["White"]] :
      [lightColors["Gray"],  lightColors["White"]]
      case "System": 
      return isDarkMode ? [darkColors["Gray"],  darkColors["Black"]] :
      [lightColors["Gray"],  lightColors["White"]]
      default:
        return [darkColors["Gray"],  darkColors["Black"]]
    }
      //return isDarkMode ? darkColors[settings.colorChoice] :
              //lightColors[settings.colorChoice]
    } else {
      if (isDarkMode) {
       return [darkColors[colorName], darkColors[colorName]]
    } else {
      return [lightColors[colorName], lightColors[colorName]]
    }
    }
  }
};

export default ColorsScreen;
