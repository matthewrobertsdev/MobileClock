/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Text,
  useColorScheme,
  Image
} from 'react-native';

import { styles } from '../style/Style'

import ButtonWithMargin from '../components/ButtonWithMargin'
import openUrl from '../utilities/openUrl'

function AboutScreen() {
  const versionNumString='8'
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black'
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView>
        <View style={styles.container}>
          <Image style={{ width: 150, height: 150, margin: 20 }} 
          source={require('../resources/icon.png')}
          accessibilityLabel="Spiffy Clock icon"/>
          <Text style={{ color: textColor, fontSize: 20, margin: 5 }}>
            Spiffy Clock
          </Text>
          <Text style={{ color: textColor, fontSize: 20, margin: 5 }}>
            Version 1.0 ({versionNumString})
          </Text>
          <Text style={{ color: textColor, fontSize: 20, margin: 5, textAlign: 'center' }}>
            {'Copyright © 2022 Matt Roberts.  \nAll rights reserved.'}
          </Text>
            <ButtonWithMargin text='Frequently Asked Questions' onPress={
              () => {
                openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/faq/spiffyclock')
              }
            } />
            <ButtonWithMargin text='Home Page' onPress={
              () => {
                openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/')
              }
            } />
            <ButtonWithMargin text='Contact the Developer' onPress={
              () => {
                openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/contact')
              }
            } />
            <ButtonWithMargin text='Privacy Policy' onPress={
              () => {
                openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/privacy/spiffyclock')
              }
            } />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default AboutScreen;
