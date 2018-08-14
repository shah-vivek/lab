import React from 'react';
import { NativeRouter, Route, BackButton, Redirect } from 'react-router-native';
import hsbcVariables from './native-base-theme/variables/platform';
import getTheme from './native-base-theme/components';
import Layout from './layout';
import {View, Text as ReactText, StyleProvider} from 'native-base';
import {
    AccountDetails, 
    SmsCodeVerification,
    AcknowledgeActivation,
    BranchSelection,
    TimeSelection,
    ServiceSelection,
    CashDeposit,
    AcknowledgeAppointMentBooking,
    AddressChange,
    ReviewAddress,
    ScanQRCode,
    AcknowledgeCheckin
} from './screens';

export default class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      isReady: false
    };

  }
  render() {
    if(!this.state.isReady){
      return (<View>
        <ReactText>Loading screens</ReactText>
      </View>)
    }
    
    
    return (
      <NativeRouter initialIndex={0} initialEntries={['/verify-account-details']} >
        <BackButton>
          <StyleProvider style = {getTheme(hsbcVariables)}>
            <Layout>
              <Route exact path="/verify-account-details" component={AccountDetails}/>
              <Route exact path="/verify-sms-code" component={SmsCodeVerification}/>
              <Route exact path="/acknowledge-activation" component={AcknowledgeActivation}/>
              <Route exact path="/select-branch" component={BranchSelection}/>
              <Route exact path="/select-time" component={TimeSelection}/>
              <Route exact path="/select-service" component={ServiceSelection}/>
              <Route exact path="/cash-deposit" component={CashDeposit}/>
              <Route exact path="/acknowledge-appointMent-booking" component={AcknowledgeAppointMentBooking}/>
              <Route exact path="/change-address" component={AddressChange}/>
              <Route exact path="/review-address" component={ReviewAddress}/>
              <Route exact path="/scan-qr-code" component={ScanQRCode}/>
              <Route exact path="/acknowledge-checkin" component={AcknowledgeCheckin}/>              
            </Layout>
          </StyleProvider>
        </BackButton>
      </NativeRouter>
    );
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      "hsbc bd": require("./assets/fonts/hsbc/UniversNextforHSBCW02-Bd.ttf"),
      "hsbc lt": require("./assets/fonts/hsbc/UniversNextforHSBCW02-Lt.ttf"),
      "hsbc ult": require("./assets/fonts/hsbc/UniversNextforHSBCW02-UltLt.ttf"),
      "hsbc md": require("./assets/fonts/hsbc/UniversNextforHSBCW02-Md.ttf"),
      "hsbc rg": require("./assets/fonts/hsbc/UniversNextforHSBCW02-Rg.ttf"),
      "hsbc-icons": require("./assets/fonts/hsbc/HSBCIcon-Font.ttf")
    });
    this.setState({ isReady: true });
  }
}

