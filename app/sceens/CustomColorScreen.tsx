/**
 * Spiffy Clock Custom Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import { SafeAreaView, StatusBar } from 'react-native';

 import ColorPicker from 'react-native-wheel-color-picker'
 
 function CustomColorScreen() {

  const [color, setColor]=useState('#FFFFFF')
  const [loaded, setLoaded]=useState(false)

  useEffect(()=>{
    setLoaded(true)
  }, [loaded])

    return (
       <SafeAreaView style={{flex: 1}}>
          <StatusBar/>
          <ColorPicker style={{margin: 20}} swatches={false} thumbSize={30}
					sliderSize={30} onColorChange={onColorChange} color={color} discrete={true}/>
          {/*<SlidersColorPicker swatches={[]}/>*/}
       </SafeAreaView>
     )

    function onColorChange(color){
      setColor(color)
    }
 };
 
 export default CustomColorScreen;
 