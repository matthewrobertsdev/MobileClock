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
  Text,
  ScrollView
} from 'react-native';


import { styles } from '../style/Style'

//holds settings
import { SettingsContext } from '../navigation/RootStackScreen';
import { colorNames, darkColors, lightColors, lightDarkBackground } from '../style/Colors';
import ButtonWithMargin from '../components/ButtonWithMargin';
import SwitchWthText from '../components/SwitchWithText';
function ColorsScreen() {
  console.log(lightColors['Red'])
  const [settings, setSettings] = useContext(SettingsContext);
  const [color, setColor] = useState('blue');

  const isDarkMode = useColorScheme() === 'dark';
  const ColorCell = (props) => (
    <View style={{
      width: 300, height: 70,
      backgroundColor: isDarkMode ? lightDarkBackground : 'white',
      flexDirection: 'row', alignItems: 'center', margin: 10, borderRadius: 20
    }}>
      <View style={{
        backgroundColor:
          props.color,
        width: 50, height: 50, borderRadius: 20,
        margin: 10
      }} />
      <Text style={{ fontSize: 20, margin: 10, color: isDarkMode ? 'white' : 'black' }}>
        {props.colorName}
      </Text>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.container}>
        {/* Color preview background and text */}
        <View style={styles.colorPreview}>
          <Text style={styles.colorPreviewText}>
            Color Preview
          </Text>
        </View>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <ButtonWithMargin text='Use Color for Background' />
            <ButtonWithMargin text='Use Color for Foreground' />
            <SwitchWthText text='Use Night Mode in Dark Mode' />
            {colorNames.map(colorName => <ColorCell colorName={colorName} 
            color={isDarkMode ? darkColors[colorName] : lightColors[colorName]}
            key={colorName} />)}
            <ButtonWithMargin text='Choose Custom Color...' />
            <ColorCell colorName={'Custom Color'} 
            color='gray'
            key='Custom Color' />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};

export default ColorsScreen;
