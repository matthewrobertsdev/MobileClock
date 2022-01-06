import React, { useState, useEffect } from 'react';

import {
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';

import { useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SwitchWithText from '../components/SwitchWithText'
import ButtonWithMargin from '../components/ButtonWithMargin'
import { SettingsContext } from '../navigation/RootStackScreen';
import { styles } from '../style/Style';


function SettingsScreen({ navigation }) {
  const [settings, setSettings] = useContext(SettingsContext);
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
  const [showsSeconds, setShowSeconds] = useState(settings.showsSeconds);
  const toggleSeconds = () => setShowSeconds(previousState => {
    saveShowSeconds(!previousState)
    settings.showsSeconds = !previousState
    setSettings(settings)
    return !previousState
  })
  const [uses24HourTime, setUses24HourTime] = useState(settings.uses24HourTime);
  const toggle24HourTime = () => setUses24HourTime(previousState => {
    saveUse24HourTime(!previousState)
    settings.uses24HourTime = !previousState
    setSettings(settings)
    return !previousState
  })
  const [showsDate, setShowsDate] = useState(settings.showsDate);
  const toggleShowsDate = () => setShowsDate(previousState => {
    saveShowsDate(!previousState)
    settings.showsDate = !previousState
    setSettings(settings)
    return !previousState
  })
  const [showsDayOfWeek, setShowsDayOfWeek] = useState(settings.showsDayOfWeek);
  const toggleShowsDayOfWeek = () => setShowsDayOfWeek(previousState => {
    saveShowsDayOfWeek(!previousState)
    settings.showsDayOfWeek = !previousState
    setSettings(settings)
    return !previousState
  })
  const [usesNumericalDate, setUsesNumericalDate] = useState(settings.usesNumericalDate);
  const toggleUsesNumericalDate = () => setUsesNumericalDate(previousState => {
    saveUsesNumericalDate(!previousState)
    settings.usesNumericalDate = !previousState
    setSettings(settings)
    return !previousState
  })
  useEffect(() => {
  }, []);
  //view
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <ButtonWithMargin text='Choose Color' onPress={() => navigation.navigate('Colors')} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <SwitchWithText toggleSwitch={toggleSeconds}
              isEnabled={showsSeconds} text='Show Seconds' />
            <SwitchWithText toggleSwitch={toggle24HourTime}
              isEnabled={uses24HourTime} text='Use 24 Hour Time' />
            <SwitchWithText toggleSwitch={toggleShowsDate}
              isEnabled={showsDate} text='Show Date' />
            <SwitchWithText toggleSwitch={toggleShowsDayOfWeek}
              isEnabled={showsDayOfWeek} text='Show Day of Week' />
            <SwitchWithText toggleSwitch={toggleUsesNumericalDate}
              isEnabled={usesNumericalDate} disabled={!showsDate} text='Use Numerical Date' />
          </View>
          <ButtonWithMargin text='Remove Ads' />
          <ButtonWithMargin text='Restore Purchases' />
          <ButtonWithMargin text='Help...' onPress={() => navigation.navigate('Help')} />
          <ButtonWithMargin text='About Spiffy Clock' onPress={() => navigation.navigate('About')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SettingsScreen;
