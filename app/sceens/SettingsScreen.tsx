import React, {useState} from 'react';

import {
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';

import type {Node} from 'react';

import SwitchWithText from '../components/SwitchWithText'
import ButtonWithMargin from '../components/ButtonWithMargin'

const SettingsScreen: () => Node = () => {
  const [showsSeconds, setShowSeconds] = useState(false);
  const toggleSeconds=()=>setShowSeconds(previousState=>!previousState)
  const [uses24HourTime, setUses24HourTime] = useState(false);
  const toggle24HourTime=()=>setUses24HourTime(previousState=>!previousState)
  const [showsDate, setShowsDate] = useState(true);
  const toggleShowsDate=()=>setShowsDate(previousState=>!previousState)
  const [showsDayOfWeek, setShowsDayOfWeek] = useState(true);
  const toggleShowsDayOfWeek=()=>setShowsDayOfWeek(previousState=>!previousState)
  const [usesNumericalDate, setUsesNumericalDate] = useState(false);
  const toggleUsesNumericalDate=()=>setUsesNumericalDate(previousState=>!previousState)
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
