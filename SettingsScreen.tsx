import React from 'react';

import {
  View,
  Button,
  Switch,
  Text,
  ScrollView,
} from 'react-native';

import type {Node} from 'react';

const SettingsScreen: () => Node = () => {
  return (
    <View>
      <ScrollView>
      <View style={{margin: 10}}><Button title={'Choose Color'}></Button></View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 200, justifyContent: 'space-between', margin: 10}}>
          <Text>Show Seconds</Text>
          <Switch/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 200, justifyContent: 'space-between', margin: 10}}>
          <Text>Use 24 Hour Time</Text>
          <Switch/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 200, justifyContent: 'space-between', margin: 10}}>
          <Text>Show Date</Text>
          <Switch/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 200, justifyContent: 'space-between', margin: 10}}>
          <Text>Show Day of Week</Text>
          <Switch/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', width: 200, justifyContent: 'space-between', margin: 10}}>
          <Text>Use Numerical Date</Text>
          <Switch/>
        </View>
      </View>
      <View style={{margin: 10}}><Button title={'Remove Ads'}></Button></View>
      <View style={{margin: 10}}><Button title={'Restore Purchases'}></Button></View>
      <View style={{margin: 10}}><Button title={'Help...'}></Button></View>
      <View style={{margin: 10}}><Button title={'About Spiffy Clock'}></Button></View>
      </ScrollView>
    </View>
  );
}
export default SettingsScreen;
