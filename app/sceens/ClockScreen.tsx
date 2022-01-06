/**
 * Spiffy Clock Clock Screen
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
  Dimensions,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { styles } from '../style/Style'

//settings pressable
import SettingsPressable from '../components/SettingsPressable'
//load settings from storage
import loadSettings from '../state/loadSettings'
//holds settings
import { SettingsContext } from '../navigation/RootStackScreen';
//clock functions
import { twentyFourHourWithSeconds, twentyFourHourNoSeconds, 
  twelveHourWithSeconds, twelveHourNoSeconds,
   getWrittenDateString, 
   getDayOfWeekStringOnly,
   getWrittenDateStingOnly,
   getNumericalDateString,
   getNumericalDateStringOnly} from '../clockFunctions/ClockFunctions'

function ClockScreen() {
  //the timer variable
  let startTimer
  const [loaded, setLoaded] = useState(false)
  const [settings, setSettings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';
  const window = Dimensions.get("window");
  const [dimensions, setDimensions] = useState({ window });
  const [multiplier, setMultiplier] = useState(1);

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
    console.log('width: '+window.width)
    console.log('height: '+window.height)
    updateSizes(window)
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window }) => {
        setDimensions({ window });
        updateSizes(window)
      }
    );
    return () => subscription?.remove();
  }, [window]);

  useEffect(() => {
    //load settings if necessary
    if (settings === undefined) {
      loadSettings().then(savedState => {
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
      updateClock()
      //start the new timer
      startTimer = setInterval(() => {
        updateClock()
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
          {/* Button to take you to settings */}
          <SettingsPressable screenName='Settings' />
        </View>
          <View style={styles.centeredContainer}>
            {/* Time Text */}
            <Text style={{ ...styles.timeText, fontSize: settings.showsSeconds ? 70*multiplier : 110*multiplier }} >
              {timeString}
            </Text>
            {/* Date Text */}
            <Text style={{...styles.dateText, fontSize: 25*multiplier}} >
              {dateString}
            </Text>
          </View>
        {/* Space for ad */}
        <View style={styles.adStyle} />
        {/* Space to separate ad from ui */}
        <View style={bottomStyle} />
      </SafeAreaView>
    );
  }
  function updateClock() {
    const date = new Date()
    if (settings.showsSeconds) {
      if (settings.uses24HourTime) {
        setTimeString(twentyFourHourWithSeconds(date))
      } else {
        setTimeString(twelveHourWithSeconds(date))
      }
    } else {
      if (settings.uses24HourTime) {
        setTimeString(twentyFourHourNoSeconds(date))
      } else {
        setTimeString(twelveHourNoSeconds(date))
      }
    }
    if (settings.usesNumericalDate) {
      if (settings.showsDayOfWeek && settings.showsDate) {
        setDateString(getNumericalDateString(date))
      } else if (settings.showsDayOfWeek) {
        setDateString(getDayOfWeekStringOnly(date))
      } else if (settings.showsDate) {
        setDateString(getNumericalDateStringOnly(date))
      } else {
        setDateString('')
      }
    } else {
      if (settings.showsDayOfWeek && settings.showsDate) {
        setDateString(getWrittenDateString(date))
      } else if (settings.showsDayOfWeek) {
        setDateString(getDayOfWeekStringOnly(date))
      } else if (settings.showsDate) {
        setDateString(getWrittenDateStingOnly(date))
      } else {
        setDateString('')
      }
    }
  }
  function updateSizes(window) {
    if (window.width>1100 && window.height>800){
      setMultiplier(4)
    } else if (window.width>900 && window.height>650){
      setMultiplier(3)
    } else if (window.width>700 && window.height>500) {
      setMultiplier(2)
    } else if (window.width>500 && window.height>400) {
      setMultiplier(1.5)
    }else if (window.width>300 && window.height>300){
      setMultiplier(1)
    } else {
      setMultiplier(0.75)
    }
  }
};

export default ClockScreen;
