import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import Button from './index';
import React from 'react';

const ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
storiesOf('Button', module).add('default button', () => (
  <View style={ViewStyle}><Button onPress={() => console.log('Button pressed')} label="Sample button"/></View>
));