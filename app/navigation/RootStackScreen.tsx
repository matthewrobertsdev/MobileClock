import React from 'react'
import {Button, Platform} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ClockScreen from '../sceens/ClockScreen'
import SettingsScreen from '../sceens/SettingsScreen'

const RootStack = createNativeStackNavigator();
let modalScreenOptions
if (Platform.OS==='ios') {
  modalScreenOptions=
    ({navigation})=>({ presentation: 'modal',
    headerRight: () => (
      <Button
        onPress={() => navigation.goBack()}
        title="Done"
      />
    ), })
} else {
  modalScreenOptions=
    { presentation: 'modal', }
}

function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Clock" component={ClockScreen} options={{
             headerShown: false,
                }}/>
      </RootStack.Group>
      <RootStack.Group screenOptions={modalScreenOptions}>
        <RootStack.Screen name="Settings" component={SettingsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
export default RootStackScreen