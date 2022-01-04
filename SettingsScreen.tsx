import React from 'react';

import {
  View,
  ScrollView,
} from 'react-native';

import type {Node} from 'react';

import SwitchWithText from './SwitchWithText'
import ButtonWithMargin from './ButtonWithMargin'

const SettingsScreen: () => Node = () => {
  return (
      <ScrollView>
      <ButtonWithMargin text='Choose Color'/>
      <View style={{flex: 1, alignItems: 'center'}}>
        <SwitchWithText text='Show Seconds'/>
        <SwitchWithText text='Use 24 Hour Time'/>
        <SwitchWithText text='Show Date'/>
        <SwitchWithText text='Show Day of Week'/>
        <SwitchWithText text='Use Numerical Date'/>
      </View>
      <ButtonWithMargin text='Remove Ads'/>
      <ButtonWithMargin text='Restore Purchases'/>
      <ButtonWithMargin text='Help...'/>
      <ButtonWithMargin text='About Spiffy Clock'/>
      </ScrollView>
  );
}
export default SettingsScreen;
