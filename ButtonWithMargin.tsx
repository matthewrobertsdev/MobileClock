import React from 'react';

import {
  View,
  Button,
  ScrollView,
} from 'react-native';

function ButtonWithMargin(props) {
  return (
    <View style={{margin: 10}}>
      <Button title={props.text}/>
    </View>
  );
}

export default ButtonWithMargin