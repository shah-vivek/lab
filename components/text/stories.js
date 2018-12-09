import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import Text from './index';


const ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

storiesOf('Text', module).add('default text', () => (
    <View style={ViewStyle}><Text>Sample text</Text></View>
));