import React from 'react'
import { Button, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClockScreen from '../sceens/ClockScreen'
import SettingsScreen from '../sceens/SettingsScreen'
import AndroidLoadingScreen from '../sceens/AndroidLoadingScreen'


const RootStack = createNativeStackNavigator();
let modalScreenOptions
if (Platform.OS === 'ios') {
  modalScreenOptions =
    ({ navigation }) => ({
      presentation: 'modal',
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

function RootStackScreen() {
  return (
    <RootStack.Navigator>
        {returnMainRootStackGroup()}
      <RootStack.Group screenOptions={modalScreenOptions}>
        <RootStack.Screen name="Settings" component={SettingsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
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