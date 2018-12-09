import React from 'react';
import SimpleChatBot from 'react-native-chatbot';
import {KeyboardAvoidingView} from 'react-native';
import Button from '../buttons/secondary-button';
import {ThemeProvider} from 'styled-components';
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a'
};

const CustomActionComponent = ({triggerNextStep}) => {
    return <Button
        label="Custom step to trigeer next"
        onPress={() => {
        triggerNextStep({value: 'Custom step', trigger: 'search'});
    }}/>
}
const Chatbot = (props) => {
    console.log('simple chatbot inside function ', SimpleChatBot);
    return (
        <KeyboardAvoidingView behavior="padding" enabled>
            <ThemeProvider theme={theme}>
                <SimpleChatBot
                    steps={[
                    {
                        id: '1',
                        message: 'What number I am thinking?',
                        trigger: '2'
                    }, {
                        id: '2',
                        options: [
                            {
                                value: 1,
                                label: 'Number 1',
                                trigger: '4'
                            }, {
                                value: 2,
                                label: 'Number 2',
                                trigger: '3'
                            }, {
                                value: 3,
                                label: 'Number 3',
                                trigger: '3'
                            }
                        ]
                    }, {
                        id: '3',
                        message: 'Wrong answer, try again.',
                        trigger: '2'
                    }, {
                        id: '4',
                        component: <CustomActionComponent/>,
                        waitAction: true
                    }, {
                        id: 'search',
                        user: true,
                        trigger: '3'
                    }
                ]}/>
            </ThemeProvider>
        </KeyboardAvoidingView>
    )
}

export default Chatbot;