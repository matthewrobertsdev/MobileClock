import React from 'react';

import {
  View,
  Switch,
  Text,
  useColorScheme,
} from 'react-native';

function SwitchWthText(props) {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black'
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', width: 200, justifyContent: 'space-between', margin: 10}}>
      <Text style={{color: textColor}}>{props.text}</Text>
      <Switch onValueChange={props.toggleSwitch} value={props.isEnabled} disabled={props.disabled}/>
    </View>
  );
}

export default SwitchWthText