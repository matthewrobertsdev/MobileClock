import React, {useEffect, useState} from 'react';

import {
  View,
  Image,
  SafeAreaView
} from 'react-native';

import loadSettings from '../state/loadSettings'

function AndroidLoadingScreen({navigation}) {

  const [settings, useSettings]=useState(null)

  //initialize with settings
  useEffect(() => {
    loadSettings().then(savedState => {
      useSettings(savedState)
    })
    setTimeout(()=>{navigation.navigate('Clock'), {state: settings}}, 1000)
  }, []);
  //view
  return (
    <SafeAreaView>
      <View style={{height: 100, backgroundColor: 'rgb(52,199,89)'}}/>
      <View style={{width: '100%', height: '100%', backgroundColor: 'rgb(52,199,89)', 
      alignItems: 'center'}}>
        <Image style={{width: 200, height: 200}} source={require('../resources/icon.png')}/>
      </View>
    </SafeAreaView>
  );
}
export default AndroidLoadingScreen;
