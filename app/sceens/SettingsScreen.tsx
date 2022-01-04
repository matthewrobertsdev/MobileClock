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


function SettingsScreen({route}) {
  let state=route.params.state
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
  const [showsSeconds, setShowSeconds] = useState(state.showsSeconds);
  const toggleSeconds=()=>setShowSeconds(previousState=>{
    saveShowSeconds(!previousState)
    state.showsSeconds=!previousState
    return !previousState})
  const [uses24HourTime, setUses24HourTime] = useState(state.use24HourTime);
  const toggle24HourTime=()=>setUses24HourTime(previousState=>{
    saveUse24HourTime(!previousState)
    state.uses24HourTime=!previousState
    return !previousState})
  const [showsDate, setShowsDate] = useState(state.showsDate);
  const toggleShowsDate=()=>setShowsDate(previousState=>{
    saveShowsDate(!previousState)
    state.showsDate=!previousState
    return !previousState
  })
  const [showsDayOfWeek, setShowsDayOfWeek] = useState(state.showsDayOfWeek);
  const toggleShowsDayOfWeek=()=>setShowsDayOfWeek(previousState=>{
    saveShowsDayOfWeek(!previousState)
    state.showsDayOfWeek=!previousState
    return !previousState
  })
  const [usesNumericalDate, setUsesNumericalDate] = useState(state.usesNumericalDate);
  const toggleUsesNumericalDate=()=>setUsesNumericalDate(previousState=>{
    saveUsesNumericalDate(!previousState)
    state.usesNumericalDate=!previousState
    return !previousState
  })
  useEffect(() => {
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
