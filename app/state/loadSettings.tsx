import AsyncStorage from '@react-native-async-storage/async-storage';

  //load settings
  const loadSettings = async () => {
    let state={showsSeconds: false, uses24HourTime: false, showsDate: true, 
      showsDayOfWeek: true, usesNumericalDate: false}
    try {
      const secondsPreference = JSON.parse(await AsyncStorage.getItem('showsSeconds'))
      if(secondsPreference !== null) {
        state.showsSeconds=secondsPreference
      }
      const twentyFourHourPreference = JSON.parse(await AsyncStorage.getItem('uses24HourTime'))
      if(twentyFourHourPreference !== null) {
        state.uses24HourTime=twentyFourHourPreference
      }
      const showsDatePreference = JSON.parse(await AsyncStorage.getItem('showsDate'))
      if(showsDatePreference !== null) {
        state.showsDate=showsDatePreference
      }
      const showsDayOfWeekPreference = JSON.parse(await AsyncStorage.getItem('showsDayOfWeek'))
      if(showsDayOfWeekPreference !== null) {
        state.showsDayOfWeek=showsDayOfWeekPreference
      }
      const usesNumericalDatePreference = JSON.parse(await AsyncStorage.getItem('usesNumericalDate'))
      if(usesNumericalDatePreference !== null) {
        state.usesNumericalDate=usesNumericalDatePreference
      }
    } catch(e) {
      // error reading value
    }
    return state
  }

  export default loadSettings