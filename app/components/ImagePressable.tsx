//import react
import React from 'react';

//react native import
import {Pressable, useColorScheme} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

function ImagePressable({screenName, imageName, color, backgroundColor, accessibilityLabel}) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={()=>{navigation.navigate(screenName)}}
      style={({pressed}) => [{
        backgroundColor: backgroundColor,
        alignItems: 'flex-end', marginTop: 10, marginRight: 10, marginLeft: 10,
        alignSelf: 'flex-end', padding: 6, borderRadius: 30
      }]} accessibilityLabel={accessibilityLabel}>
        <Icon name={imageName} size={30} color={color} />
    </Pressable>
  );
}

export default ImagePressable;
