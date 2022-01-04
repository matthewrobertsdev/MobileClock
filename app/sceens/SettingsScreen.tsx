import React, {useState, useEffect} from 'react';

import {
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';

import type {Node} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SwitchWithText from '../components/SwitchWithText'
import ButtonWithMargin from '../components/ButtonWithMargin'

const SettingsScreen: () => Node = () => {
  //save settings
  const saveShowSeconds = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('showsSeconds', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const saveUse24HourTime = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('uses24HourTime', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const saveShowsDate = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('showsDate', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const saveShowsDayOfWeek = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('showsDayOfWeek', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const saveUsesNumericalDate = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('usesNumericalDate', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  //state
  const [showsSeconds, setShowSeconds] = useState(false);
  const toggleSeconds=()=>setShowSeconds(previousState=>{
    saveShowSeconds(!previousState)
    return !previousState})
  const [uses24HourTime, setUses24HourTime] = useState(false);
  const toggle24HourTime=()=>setUses24HourTime(previousState=>{
    saveUse24HourTime(!previousState)
    return !previousState})
  const [showsDate, setShowsDate] = useState(true);
  const toggleShowsDate=()=>setShowsDate(previousState=>{
    saveShowsDate(!previousState)
    return !previousState
  })
  const [showsDayOfWeek, setShowsDayOfWeek] = useState(true);
  const toggleShowsDayOfWeek=()=>setShowsDayOfWeek(previousState=>{
    saveShowsDayOfWeek(!previousState)
    return !previousState
  })
  const [usesNumericalDate, setUsesNumericalDate] = useState(false);
  const toggleUsesNumericalDate=()=>setUsesNumericalDate(previousState=>{
    saveUsesNumericalDate(!previousState)
    return !previousState
  })

  //load settings
  const getData = async () => {
    try {
      const secondsPreference = JSON.parse(await AsyncStorage.getItem('showsSeconds'))
      if(secondsPreference !== null) {
        setShowSeconds(secondsPreference)
      }
      const twentyFourHourPreference = JSON.parse(await AsyncStorage.getItem('uses24HourTime'))
      if(twentyFourHourPreference !== null) {
        setUses24HourTime(twentyFourHourPreference)
      }
      const showsDatePreference = JSON.parse(await AsyncStorage.getItem('showsDate'))
      if(showsDatePreference !== null) {
        setShowsDate(showsDatePreference)
      }
      const showsDayOfWeekPreference = JSON.parse(await AsyncStorage.getItem('showsDayOfWeek'))
      if(showsDayOfWeekPreference !== null) {
        setShowsDayOfWeek(showsDayOfWeekPreference)
      }
      const usesNumericalDatePreference = JSON.parse(await AsyncStorage.getItem('usesNumericalDate'))
      if(usesNumericalDatePreference !== null) {
        setUsesNumericalDate(usesNumericalDatePreference)
      }
    } catch(e) {
      // error reading value
    }
  }
  //initialize with settings
  useEffect(() => {
    getData()
  }, []);
  //view
  return (
    <SafeAreaView>
      <ScrollView>
      <ButtonWithMargin text='Choose Color'/>
      <View style={{flex: 1, alignItems: 'center'}}>
        <SwitchWithText toggleSwitch={toggleSeconds} 
        isEnabled={showsSeconds} text='Show Seconds'/>
        <SwitchWithText toggleSwitch={toggle24HourTime} 
        isEnabled={uses24HourTime} text='Use 24 Hour Time'/>
        <SwitchWithText toggleSwitch={toggleShowsDate} 
        isEnabled={showsDate} text='Show Date'/>
        <SwitchWithText toggleSwitch={toggleShowsDayOfWeek} 
        isEnabled={showsDayOfWeek} text='Show Day of Week'/>
        <SwitchWithText toggleSwitch={toggleUsesNumericalDate} 
        isEnabled={usesNumericalDate} text='Use Numerical Date'/>
      </View>
      <ButtonWithMargin text='Remove Ads'/>
      <ButtonWithMargin text='Restore Purchases'/>
      <ButtonWithMargin text='Help...'/>
      <ButtonWithMargin text='About Spiffy Clock'/>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SettingsScreen;
