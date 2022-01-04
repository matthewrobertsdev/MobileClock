//import react
import React from 'react';

//react native import
import {Pressable, useColorScheme} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

function SettingsPressable({screenName}) {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={()=>{navigation.navigate(screenName)}}
      style={({pressed}) => [{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, //? 'black' : 'white',
        alignItems: 'flex-end', marginTop: 10, marginRight: 10, 
        alignSelf: 'flex-end', padding: 6, borderRadius: 30
      }]}>
        <Icon name="cog-outline" size={30} color={isDarkMode ? 'white' : 'black'} />
    </Pressable>
  );
}

export default SettingsPressable;
