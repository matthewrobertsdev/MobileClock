/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useContext } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {styles} from '../style/Style'

import SettingsPressable from '../components/SettingsPressable'
import loadSettings from '../state/loadSettings'
import { SettingsContext } from '../navigation/RootStackScreen';
import {twentyFourHourWithSeconds, twentyFourHourNoSeconds, getDateStringFromDate} from '../clockFunctions/ClockFunctions'

function ClockScreen() {
  //the timer variable
  let startTimer
  const [loaded, setLoaded] = useState(false)
  const [settings, setSettings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';

  //date and time string state 
  const [timeString, setTimeString] = useState('')
  const [dateString, setDateString] = useState('')

  const safeAreaStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const bottomStyle = {
    height: Platform.OS === 'ios' ? 35 : 50,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 0,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, //isDarkMode ? 'black' : 'white',
  }

  useEffect(() => {
    //load settings if necessary
    if (settings===undefined) {
      loadSettings().then(savedState => {
        console.log('efgh')
        setSettings(savedState)
        setLoaded(true)
      })
    } else {
      setLoaded(true)
    }
    if (loaded) {
      //clear any old timer
      if (startTimer !== undefined) {
        clearTimeout(startTimer)
      }
      console.log('should start timer')
      //get initial date and time strings
      const startDate=new Date()
      if (settings.showsSeconds) {
        setTimeString(twentyFourHourWithSeconds(startDate))
      } else {
        setTimeString(twentyFourHourNoSeconds(startDate))
      }
      setDateString(getDateStringFromDate(startDate))
      //start the new timer
      startTimer = setInterval(() => {
        const date=new Date()
        if (settings.showsSeconds) {
          setTimeString(twentyFourHourWithSeconds(date))
        } else {
          setTimeString(twentyFourHourNoSeconds(date))
        }
        setDateString(getDateStringFromDate(startDate))
      }, 100);
      return () => {
        //clear the timer
        if (startTimer !== undefined) {
          clearTimeout(startTimer)
        }
      };
    }
  }, [loaded])

  //if settings are undefined, display empty ui
  if (settings === undefined) {
    return (
      <SafeAreaView style={safeAreaStyle}>
        <StatusBar />
        <View style={styles.settingsContainer}>
        </View>
      </SafeAreaView>
    )
  } else {
  //if settings are loaded, display ui
  return (
    <SafeAreaView style={safeAreaStyle}>
      <StatusBar />
      <View style={styles.settingsContainer}>
        <SettingsPressable state={settings} screenName='Settings' />
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          {/* Time Text */}
          <Text style={styles.timeText} >{timeString}</Text>
          <Text style={styles.dateText} >{dateString}</Text>
          {/* Date Text */}
        </View>
        {/* Space for ad */}
        <View style={styles.adStyle} />
        {/* Space to separate ad from ui */}
        <View style={bottomStyle} />
      </View>
    </SafeAreaView>
  );
  }
};

export default ClockScreen;
