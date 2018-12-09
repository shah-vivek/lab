import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {Facebook} from 'expo';
import {Auth} from 'aws-amplify';
import {DynamoDB, LexRuntime} from 'aws-sdk';
import { GiftedChat } from 'react-native-gifted-chat';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            userLoggedIn: false,
            userDetails: null,
            messages: []
        };
        this.loginWithFacebook = this
            .loginWithFacebook
            .bind(this);
    }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
        }))
    }
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any'
                    }
                }
            ]
        })
    }
    async loginWithFacebook() {
        const {type, token, expires} = await Facebook.logInWithReadPermissionsAsync('692226567825277', {
            permissions: ['public_profile', 'email']
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?fields=name,email&access_token=${token}`);
            const {email, name} = await response.json();
            try {

                const credentials = await Auth.federatedSignIn('facebook', {
                    token,
                    expires_at: expires
                }, {email, name});
                console.log('user details: ', email, "credentials ", credentials, "\n");
                var lexruntime = new LexRuntime({apiVersion: '2016-11-28', region: 'eu-west-1', credentials});
                const lexResponse = await lexruntime.postText({
                    botAlias: 'TravelBot',
                    botName: 'BuyTravelInsurance',
                    inputText: 'I need more information',
                    userId: Math.random() + ''
                }).promise();
                console.log('Lex response: ', lexResponse);
                this.setState({
                    userLoggedIn: true,
                    userDetails: {
                        name,
                        email
                    }
                })
                /* const db = new DynamoDB({region: 'eu-west-1', credentials, sslEnabled: false});

                var params = {
                    Key: {
                        "CityName": {
                            S: "Japan"
                        }
                    },
                    TableName: "CountryCityList"
                };
                const {Item} = await db.getItem(params).promise();
                console.log('Cityname: ', Item); */
            } catch (e) {
                console.log('error in fetching the token', e);
            }
        }
    }
    render() {
        console.log('this.state ', this.state);
        return (<GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
            _id: 1
        }}/>);
    }
}

export default Home;

/* <View
                style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {this.state.userLoggedIn
                    ? <Text>Hi {this.state.userDetails.name}</Text>
                    : <Button onPress={this.loginWithFacebook} title="Log in with facebook">
                        <Text>Log in with Facebook</Text>
                    </Button>}

            </View> */