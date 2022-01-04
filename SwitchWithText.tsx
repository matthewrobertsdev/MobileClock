import React from 'react';

import {
  View,
  Switch,
  Text,
} from 'react-native';

function SwitchWthText(props) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', width: 200, justifyContent: 'space-between', margin: 10}}>
      <Text>{props.text}</Text>
      <Switch/>
    </View>
  );
}

export default SwitchWthText