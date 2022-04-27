/**
 * Spiffy Clock Clock Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/** imports */
//react and react native
import React, { useEffect, useState, useContext, useRef } from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme, View,
  Dimensions, AppState } from 'react-native';
//colors and style
import { styles } from '../style/Style'
//image pressable
import ImagePressable from '../components/ImagePressable'
//settings: load and context
import loadSettings from '../state/loadSettings'
import { SettingsContext } from '../navigation/RootStackScreen';
//clock functions
import { twentyFourHourWithSeconds, twentyFourHourNoSeconds, 
  twelveHourWithSeconds, twelveHourNoSeconds, getWrittenDateString, 
  getDayOfWeekStringOnly, getWrittenDateStingOnly, getNumericalDateString,
  getNumericalDateStringOnly, getEmptyDateString} from '../clockFunctions/ClockFunctions'
import { getBackgroundColor, getIconColor, getSafeAreaColor, getTextColor, getBarStyle } from '../style/Colors';

function ClockScreen() {
  /* basic state */
  //the timer variable
  let startTimer
  //settings
  const [loaded, setLoaded] = useState(false)
  const [settings, setSettings] = useContext(SettingsContext);
  //colors
  const [color, setColor]=useState('Blue')
  const [textColor, setTextColor]=useState('black')
  const [safeAreaColor, setSafeAreaColor]=useState('Blue')
  const [iconColor, setIconColor]=useState('black')
  const [barStyle, setBarStyle]=useState('dark-content')
  const isDarkMode = useColorScheme() === 'dark';
  //sizing
  const window = Dimensions.get("window");
  const [dimensions, setDimensions] = useState({ window });
  const [multiplier, setMultiplier] = useState(1);
  //app state
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  //date and time string state 
  const [timeString, setTimeString] = useState('')
  const [dateString, setDateString] = useState('')

  /** for iOS paused clock ui */
  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  /** for sizing */
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

  /** load settings and update clock */
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
      //color
      setTextColor(getTextColor(settings, isDarkMode))
      setColor(getBackgroundColor(settings, isDarkMode))
      setSafeAreaColor(getSafeAreaColor(settings, isDarkMode))
      setIconColor(getIconColor(settings, isDarkMode))
      setBarStyle(getBarStyle(settings, isDarkMode))
      //clear any old timer
      if (startTimer !== undefined) {
        clearTimeout(startTimer)
      }
      if (appStateVisible!=='inactive') {
        //get initial date and time strings
        const timeFunction=getUpdateTimeFunction()
        const dateFunction=getUpdateDateFunction()
        updateClock(timeFunction, dateFunction)
        //start the new timer
        startTimer = setInterval(() => {
          //console.log("timer")
          updateClock(timeFunction, dateFunction)
        }, 100);
      } else {
        if (settings.showsSeconds) {
          setTimeString("--:--:--")
        } else {
          setTimeString("--:--")
        }
        setDateString("Clock Paused")
      }
    }
    return () => {
      //clear the timer
      if (startTimer !== undefined) {
        clearTimeout(startTimer)
      }
    };
  }, [loaded, settings, appStateVisible, isDarkMode])

  /** view */
  //if settings are undefined, display empty ui
  if (settings === undefined) {
    return (
      <SafeAreaView style={{...styles.safeAreaStyle, 
      backgroundColor: safeAreaColor}}>
        <StatusBar/>
        <View style={styles.settingsContainer}>
        </View>
      </SafeAreaView>
    )
  } else {
    //if settings are loaded, display ui
    return (
      <SafeAreaView style={{...styles.safeAreaStyle, 
        backgroundColor: safeAreaColor}}>
        <StatusBar hidden={!settings.showsStatusBar} barStyle={barStyle}/>
        <View style={{...styles.settingsContainer, backgroundColor: color}}>
          {/* Button to take you to settings */}
          <ImagePressable screenName='Colors' imageName='brush-outline' 
          color={iconColor} backgroundColor={color}
          accessibilityLabel={"Show colors"}/>
          <ImagePressable screenName='Settings' imageName='cog-outline' 
          color={iconColor} backgroundColor={color}
          accessibilityLabel={"Show settings"}/>
        </View>
          <View style={{...styles.centeredContainer, backgroundColor: color}}>
            {/* Time Text */}
            <Text style={{ ...styles.timeText, fontSize: 
              settings.showsSeconds ? 70*multiplier : 110*multiplier,
              color: textColor}} allowFontScaling={false}>
              {timeString/*'20:32:45'*/}
            </Text>
            {/* Date Text */}
            <Text style={{...styles.dateText, fontSize: 25*multiplier, 
              color: textColor}} allowFontScaling={false}>
              {dateString/*"Wednesday, September 30"*/}
            </Text>
          </View>
        {/* Space to separate ad from ui */}
        <View style={{...styles.bottomStyle, backgroundColor: color}} />
      </SafeAreaView>
    );
  }
  /** update clock functions */
  //get time function
  function getUpdateTimeFunction() {
    if (settings.showsSeconds) {
      if (settings.uses24HourTime) {
        return twentyFourHourWithSeconds
      } else {
        return twelveHourWithSeconds
      }
    } else {
      if (settings.uses24HourTime) {
        return twentyFourHourNoSeconds
      } else {
        return twelveHourNoSeconds
      }
    }
  }
  //get date function
  function getUpdateDateFunction() {
    if (settings.usesNumericalDate) {
      if (settings.showsDayOfWeek && settings.showsDate) {
        return getNumericalDateString
      } else if (settings.showsDayOfWeek) {
        return getDayOfWeekStringOnly
      } else if (settings.showsDate) {
        return getNumericalDateStringOnly
      } else {
        return getEmptyDateString
      }
    } else {
      if (settings.showsDayOfWeek && settings.showsDate) {
        return getWrittenDateString
      } else if (settings.showsDayOfWeek) {
        return getDayOfWeekStringOnly
      } else if (settings.showsDate) {
        return getWrittenDateStingOnly
      } else {
        return getEmptyDateString
      }
    }
  }
  function updateClock(timeFunction, dateFunction) {
    const date = new Date()
    setTimeString(timeFunction(date))
    setDateString(dateFunction(date))
  }
  /** update size function */
  function updateSizes(window) {
    const width=window.width
    const height=window.height
    if (width>1150 && height>700){
      setMultiplier(4)
    } else if (width>900 && height>600){
      setMultiplier(3.25)
    } else if (width>800 && height>450){
      setMultiplier(2.5)
    } else if (width>700 && height>410){
      setMultiplier(2.1)
    } else if (width>600 && height>300) {
      setMultiplier(1.75)
    } else if (width>410 && height>250) {
      setMultiplier(1.25)
    } else if (width>300 && height>150){
      setMultiplier(1)
    } else {
      setMultiplier(0.75)
    }
    console.log(width)
  }
};
export default ClockScreen;
