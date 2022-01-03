/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SettingsPressable from './SettingsPressable'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  let use24HourTime=false;

  const daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
  'Thursday', 'Friday', 'Saturday'];
  const months=['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];

  const [timeString, setTimeString]=useState(getTimeStringFromDate(new Date()))
  const [dateString, setDateString]=useState(getDateStringFromDate(new Date()))

  const safeAreaStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    //height: Platform.OS === 'ios' ? 50 : 0,
    flex: 1,
  };

  const bottomStyle = {
    height: Platform.OS === 'ios' ? 35 : 50,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 0,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const adStyle = {
    height: 50,
    width: '100%',
    backgroundColor: 'rgb(2, 76, 182)'//'rgb(96, 31, 159)'//rgb(255, 204, 2)'//rgb(5, 121, 255)'
  }

  useEffect(() => {
    //start a timer to update time and date strings
    let startTimer = setInterval(() => {
      const date=new Date();
      setTimeString(getTimeStringFromDate(date));
      setDateString(getDateStringFromDate(date));
  }, 100);
  return () => {
    //clear the timer
    if (startTimer!==null) {
      clearTimeout(startTimer)
  }
  };
}, []);

  return (
    <SafeAreaView style={safeAreaStyle}>
      <StatusBar/>
      <View style={styles.settingsContainer}>
      <SettingsPressable/>
        </View>
      <View style={styles.container}>
        <View style={styles.container}>
          {/* Time Text */}
          <Text style={styles.timeText} >{timeString}</Text>
          <Text style={styles.dateText} >{dateString}</Text>
          {/* Date Text */}
        </View>
        {/* Space for ad */}
        <View style={adStyle}/>
        {/* Space to separate ad from ui */}
        <View style={bottomStyle}/>
      </View>
    </SafeAreaView>
  );
  //miltary time with seconds
  function getTimeStringFromDate(date: Date) {
    let minutesString=''
    let secondsString=''
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()
    let hours=date.getHours()
    if (minutes<10) {
      minutesString=`0${minutes}`
    } else {
      minutesString=`${minutes}`
    }
    if (seconds<10) {
      secondsString=`0${seconds}`
    } else {
      secondsString=`${seconds}`
    }
    if (use24HourTime===false) {
      if (hours>12) {
        hours-=12
      }
    }
    return `${hours}:${minutesString}:${secondsString}`;
  }
  
  //day of week with month and day
  function getDateStringFromDate(date: Date) {
    return `${daysOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
  }
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(2, 76, 182)'//'rgb(96, 31, 159)'rgb(189, 134, 9)'//rgb(255, 204, 2)'//rgb(5, 121, 255)'
  },
  settingsContainer: {
    backgroundColor: 'rgb(2, 76, 182)'
  },
  timeText: {
    fontSize: 60,
    textAlign: "center",
    color: 'white',
    margin: 5,
  },
  dateText: {
    fontSize: 30,
    textAlign: "center",
    color: 'white',
    margin: 5,
  },
})

export default App;

