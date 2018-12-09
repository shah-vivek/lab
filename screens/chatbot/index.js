import React from 'react';
import { StyleSheet, Text, SafeAreaView, Alert, StatusBar } from 'react-native';
import Amplify from 'aws-amplify';
import { ChatBot } from 'aws-amplify-react-native';

Amplify.configure({
  Auth: {
    identityPoolId: 'eu-west-1:e76efaf4-96f2-4c5b-92c2-433a0c24d173',
    region: 'eu-west-1'
  },
  Interactions: {
    bots: {
      "BuyTravelInsurance": {
        "name": "BuyTravelInsurance",
        "alias": "$LATEST",
        "region": "eu-west-1",
      },
    }
  }
});


const styles = StyleSheet.create({
  
  
  
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
  },
});

export default class App extends React.Component {

    state = {
        botName: 'BuyTravelInsurance',
        welcomeMessage: 'Welcome, what would you like to do today?  Type Hi to wake me up!',
    };

    constructor(props) {
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete(err, confirmation) {
        if (err) {
        //Alert.alert('Error', 'Bot conversation failed', [{ text: 'OK' }]);
        return;
        }

       // Alert.alert('Done', JSON.stringify(confirmation, null, 2), [{ text: 'OK' }]);

        this.setState({
        botName: 'BuyTravelInsurance',
        });

        return '';
    }

    render() {
        const { botName, showChatBot, welcomeMessage } = this.state;

        return (
        <SafeAreaView style={styles.container}>
            <ChatBot
            botName={botName}
            welcomeMessage={welcomeMessage}
            onComplete={this.handleComplete}
            clearOnComplete={false}
            styles={StyleSheet.create({
                itemMe: {
                color: 'red'
                }
            })}
            />
        </SafeAreaView>
        );
    }

}
