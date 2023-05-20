import AsyncStorage from '@react-native-async-storage/async-storage';

  //load settings
  const loadSettings = async () => {
    let state={showsSeconds: false, uses24HourTime: false, showsDate: true, 
      showsDayOfWeek: true, usesNumericalDate: false, colorChoice: 'Blue', 
      usesNightMode: false, usesBrightMode: false, colorForForeground: false, usesGradient: false, 
      showsStatusBar: true, customRed: 43, customGreen: 186, customBlue: 255}
    try {
      const secondsPreference = JSON.parse(await AsyncStorage.getItem('showsSeconds'))
      if(secondsPreference !== null && typeof secondsPreference === 'boolean') {
        state.showsSeconds=secondsPreference
      }
      const twentyFourHourPreference = JSON.parse(await AsyncStorage.getItem('uses24HourTime'))
      if(twentyFourHourPreference !== null && typeof twentyFourHourPreference === 'boolean') {
        state.uses24HourTime=twentyFourHourPreference
      }
      const showsDatePreference = JSON.parse(await AsyncStorage.getItem('showsDate'))
      if(showsDatePreference !== null && typeof showsDatePreference === 'boolean') {
        state.showsDate=showsDatePreference
      }
      const showsDayOfWeekPreference = JSON.parse(await AsyncStorage.getItem('showsDayOfWeek'))
      if(showsDayOfWeekPreference !== null && typeof showsDayOfWeekPreference === 'boolean') {
        state.showsDayOfWeek=showsDayOfWeekPreference
      }
      const usesNumericalDatePreference = JSON.parse(await AsyncStorage.getItem('usesNumericalDate'))
      if(usesNumericalDatePreference !== null && typeof usesNumericalDatePreference === 'boolean') {
        state.usesNumericalDate=usesNumericalDatePreference
      }
      const colorChoicePreference = JSON.parse(await AsyncStorage.getItem('colorChoice'))
      if(colorChoicePreference !== null && typeof colorChoicePreference === 'string') {
        state.colorChoice=colorChoicePreference
      }
      const usesNightModePreference = JSON.parse(await AsyncStorage.getItem('usesNightMode'))
      if(usesNightModePreference !== null && typeof usesNightModePreference === 'boolean') {
        state.usesNightMode=usesNightModePreference
      }
      const usesBrightModePreference = JSON.parse(await AsyncStorage.getItem('usesBrightMode'))
      if(usesBrightModePreference !== null && typeof usesBrightModePreference === 'boolean') {
        state.usesBrightMode=usesBrightModePreference
      }
      const colorForForeground = JSON.parse(await AsyncStorage.getItem('colorForForeground'))
      if(colorForForeground !== null && typeof colorForForeground === 'boolean') {
        state.colorForForeground=colorForForeground
      }
      const usesGradient = JSON.parse(await AsyncStorage.getItem('usesGradient'))
      if(usesGradient !== null && typeof usesGradient === 'boolean') {
        state.usesGradient=usesGradient
      }
      const showsStatusBarPreference = JSON.parse(await AsyncStorage.getItem('showsStatusBar'))
      if(showsStatusBarPreference !== null && typeof showsStatusBarPreference === 'boolean') {
        state.showsStatusBar=showsStatusBarPreference
      }
    } catch(e) {
      // error reading value
    }
    return state
  }

  export default loadSettings