import {storiesOf} from '@storybook/react-native';
import {View, Text} from 'react-native';
import React from 'react';
import Chatbot from './index';

console.log('Chatbot instance ', Chatbot);

const ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
storiesOf('Chatobot', module).add('default Chatbot', () => {
    console.log('Chatobot ', Chatbot);
    return (<Chatbot/>)
});