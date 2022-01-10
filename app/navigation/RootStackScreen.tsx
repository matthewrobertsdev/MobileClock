import React, {useState} from 'react'
import { Button, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClockScreen from '../sceens/ClockScreen'
import SettingsScreen from '../sceens/SettingsScreen'
import ColorsScreen from '../sceens/ColorsScreen'
import AndroidLoadingScreen from '../sceens/AndroidLoadingScreen'
import HelpScreen from '../sceens/HelpScreen'
import AboutScreen from '../sceens/AboutScreen'
import CustomColorScreen from '../sceens/CustomColorScreen'


const RootStack = createNativeStackNavigator();
let modalScreenOptions
if (Platform.OS === 'ios') {
  modalScreenOptions =
    ({ navigation }) => ({
      presentation: 'fullScreenModal',
      headerRight: () => (
        <Button
          onPress={() => navigation.goBack()}
          title="Done"
        />
      ),
    })
} else {
  modalScreenOptions =
    { presentation: 'modal', }
}

export const SettingsContext = React.createContext();

function SettingsScreenNavigator() {
    return (
      <RootStack.Navigator>
        <RootStack.Screen name="Settings" component={SettingsScreen} 
        options={modalScreenOptions}/>
        <RootStack.Screen name="Help" component={HelpScreen} />
        <RootStack.Screen name="About" component={AboutScreen} />
      </RootStack.Navigator>
    )
}

function ColorsScreenNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Colors" component={ColorsScreen} 
      options={modalScreenOptions}/>
      <RootStack.Screen name="Custom Color" component={CustomColorScreen} />
    </RootStack.Navigator>
  )
}


function RootStackScreen() {
  const [settings, setSettings]=useState(undefined)
  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
    <RootStack.Navigator>
        {returnMainRootStackGroup()}
      <RootStack.Group screenOptions={modalScreenOptions}>
        <RootStack.Screen name="SettingsScreenNavigator" component={SettingsScreenNavigator} 
        options={{ headerShown: false }}/>
        <RootStack.Screen name="ColorsScreenNavigator" component={ColorsScreenNavigator} 
        options={{ headerShown: false }}/>
      </RootStack.Group>
    </RootStack.Navigator>
    </SettingsContext.Provider>

  );
}
function returnMainRootStackGroup() {
  if (Platform.OS === 'ios') {
    return (
    <RootStack.Group>
      <RootStack.Screen name="Clock" component={ClockScreen} options={{
        headerShown: false,
      }} />
    </RootStack.Group>
    )
  } else {
    return (
    <RootStack.Group>
      <RootStack.Screen name="LoadingScreen" component={AndroidLoadingScreen} options={{
        headerShown: false,
      }} />
      <RootStack.Screen name="Clock" component={ClockScreen} options={{
        headerShown: false,
      }} />
    </RootStack.Group>
    )
  }
}
export default RootStackScreen