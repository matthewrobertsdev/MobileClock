/**
 * Spiffy Clock Help Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   View,
 } from 'react-native';

 import { styles } from '../style/Style'

 import ButtonWithMargin from '../components/ButtonWithMargin'
 import openUrl from '../utilities/openUrl'
 
 function HelpScreen() {

    return (
       <SafeAreaView style={{flex: 1}}>
         <StatusBar />
         <View style={styles.container}>
          <ButtonWithMargin text='Frequently Asked Questions' onPress={
            ()=>{
              openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/faq/spiffyclock')
            }
          }/>
          <ButtonWithMargin text='Contact the Developer' onPress={
            ()=>{
              openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/contact')
            }
          }/>
         </View>
       </SafeAreaView>
     )
 };
 
 export default HelpScreen;
 