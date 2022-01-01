/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  AppState,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
  'September', 'October', 'November', 'December'];

  const [timeString, setTimeString]=useState(getTimeStringFromDate(new Date()))
  const [dateString, setDateString]=useState(getDateStringFromDate(new Date()))

  const statusBarStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: Platform.OS === 'ios' ? 50 : 0,
    width: '100%'
  };

  const bottomStyle = {
    height: 50,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 0,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const adStyle = {
    height: 50,
    width: '100%',
    backgroundColor: 'rgb(2, 76, 182)'//rgb(255, 204, 2)'//rgb(5, 121, 255)'
  }

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);


  useEffect(() => {
    console.log(appState)
    let startTimer = setInterval(() => {
      const date=new Date();
      console.log('tic');
      setTimeString(getTimeStringFromDate(date));
      setDateString(getDateStringFromDate(date));
  }, 100);
    /*
    let subscription;
    if (appState.current==='unknown') {
      const startDate=new Date()
    const millisecondsOffset=1000-startDate.getMilliseconds()
    let timeOut = setTimeout(() => {
      let firstDate=new Date()
      setTimeString(getTimeStringFromDate(firstDate));
      setDateString(getDateStringFromDate(firstDate));
      startTimer = setInterval(() => {
        const date=new Date();
        console.log('tic');
        setTimeString(getTimeStringFromDate(date));
        setDateString(getDateStringFromDate(date));
    }, 100);
  }, millisecondsOffset);
  } else {
    subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
    const startDate=new Date()
    const millisecondsOffset=1000-startDate.getMilliseconds()
    let timeOut = setTimeout(() => {
      let firstDate=new Date()
      setTimeString(getTimeStringFromDate(firstDate));
      setDateString(getDateStringFromDate(firstDate));
      startTimer = setInterval(() => {
        const date=new Date();
        console.log('tic');
        setTimeString(getTimeStringFromDate(date));
        setDateString(getDateStringFromDate(date));
    }, 1000);
  }, millisecondsOffset);
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    })
  }
  */
  return () => {
    if (startTimer!==null) {
      clearTimeout(startTimer)
  }
  //if (subscription!==null) {
    //subscription.remove();
//}
  };
}, []);

  return (
    <View style={styles.container}>
      <View style={statusBarStyle}></View>
      <View style={styles.container}>
        <Text style={styles.timeText} >{timeString}</Text>
        <Text style={styles.dateText} >{dateString}</Text>
      </View>
      <View style={adStyle}></View>
      <View style={bottomStyle}>
      </View>
    </View>
  );
  function getTimeStringFromDate(date: Date) {
    let minutesString=''
    let secondsString=''
    const minutes=date.getMinutes()
    const seconds=date.getSeconds()
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
    return `${date.getHours()}:${minutesString}:${secondsString}`;
  }
  
  function getDateStringFromDate(date: Date) {
    return `${daysOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
  }
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(2, 76, 182)'//rgb(189, 134, 9)'//rgb(255, 204, 2)'//rgb(5, 121, 255)'
  },
  timeText: {
    fontSize: 75,
    textAlign: "center",
    color: 'white',
    margin: 10,
  },
  dateText: {
    fontSize: 50,
    textAlign: "center",
    color: 'white',
    margin: 10,
  },
})

export default App;

