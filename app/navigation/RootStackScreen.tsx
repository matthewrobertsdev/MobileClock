import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ClockScreen from '../sceens/ClockScreen'
import SettingsScreen from '../sceens/SettingsScreen'

const RootStack = createNativeStackNavigator();

function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Clock" component={ClockScreen} options={{
             headerShown: false,
                }}/>
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="Settings" component={SettingsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
export default RootStackScreen