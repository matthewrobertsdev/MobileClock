import React, { useEffect } from 'react';

import { View, ScrollView, SafeAreaView } from 'react-native';

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
  const saveShowsStatusBar = async (state) => {
    try {
      const jsonValue = JSON.stringify(state)
      await AsyncStorage.setItem('showsStatusBar', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const toggleSeconds = () => {
    saveShowSeconds(!settings.showsSeconds)
    setSettings({...settings, showsSeconds: !settings.showsSeconds})
  }
  const toggle24HourTime = () => {
    saveUse24HourTime(!settings.uses24HourTime)
    setSettings({...settings, uses24HourTime: !settings.uses24HourTime})
  }
  const toggleShowsDate = () => {
    saveShowsDate(!settings.showsDate)
    setSettings({...settings, showsDate: !settings.showsDate})
  }
  const toggleShowsDayOfWeek = () => {
    saveShowsDayOfWeek(!settings.showsDayOfWeek)
    setSettings({...settings, showsDayOfWeek: !settings.showsDayOfWeek})
  }
  const toggleUsesNumericalDate = () => {
    saveUsesNumericalDate(!settings.usesNumericalDate)
    setSettings({...settings, usesNumericalDate: !settings.usesNumericalDate})
  }
  const toggleShowsStatusBar = () => {
    saveShowsStatusBar(!settings.showsStatusBar)
    setSettings({...settings, showsStatusBar: !settings.showsStatusBar})
  }
  useEffect(() => {
  }, []);
  //view
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <SwitchWithText toggleSwitch={toggleSeconds}
              isEnabled={settings.showsSeconds} text='Show Seconds' />
            <SwitchWithText toggleSwitch={toggle24HourTime}
              isEnabled={settings.uses24HourTime} text='Use 24 Hour Time' />
            <SwitchWithText toggleSwitch={toggleShowsDate}
              isEnabled={settings.showsDate} text='Show Date' />
            <SwitchWithText toggleSwitch={toggleShowsDayOfWeek}
              isEnabled={settings.showsDayOfWeek} text='Show Day of Week' />
            <SwitchWithText toggleSwitch={toggleUsesNumericalDate}
              isEnabled={settings.usesNumericalDate} 
              disabled={!settings.showsDate} text='Use Numerical Date' />
            <SwitchWithText toggleSwitch={toggleShowsStatusBar}
              isEnabled={settings.showsStatusBar} text='Shows Status Bar' />
          </View>
          <ButtonWithMargin text='Help' onPress={() => navigation.navigate('Help')} />
          <ButtonWithMargin text='About Spiffy Clock' onPress={() => navigation.navigate('About')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SettingsScreen;
