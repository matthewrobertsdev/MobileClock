//import react
import React from 'react';

//react native import
import {Pressable, Text, useColorScheme} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function SettingsPressable(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Pressable
      onPress={()=>{}}
      style={({pressed}) => [{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, 
        alignItems: 'flex-end', marginTop: 10, marginRight: 10, 
        alignSelf: 'flex-end', padding: 6, borderRadius: 12
      }]}>
      <Text style={{color: isDarkMode ? 'white' : 'black'}}>
        Settings
      </Text>
    </Pressable>
  );
}

export default SettingsPressable;
