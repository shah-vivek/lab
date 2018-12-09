import React from 'react';
import {NativeRouter, Route, BackButton, Redirect} from 'react-router-native';
import hsbcVariables from './native-base-theme/variables/platform';
import getTheme from './native-base-theme/components';
import Layout from './layout';
import {View, Text as ReactText, StyleProvider} from 'native-base';
import {
  AcknowledgeActivation,
  BranchSelection,
  TimeSelection,
  ServiceSelection,
  CashDeposit,
  AcknowledgeAppointMentBooking,
  AddressChange,
  ReviewAddress,
  ScanQRCode,
  AcknowledgeCheckin,
  DDTelegraphicTransfer,
  ReviewDDTelegraphicTransfer,
  ChequeDetails,
  DepositCheque
} from './screens';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };

  }
  render() {
    if (!this.state.isReady) {
      return (
        <View>
          <ReactText>Loading screens</ReactText>
        </View>
      )
    }

    return (
      <NativeRouter initialIndex={0} initialEntries={['/select-service']}>
        <BackButton>
          <StyleProvider style={getTheme(hsbcVariables)}>
            <Layout>
            
              <Route exact path="/select-service" component={ServiceSelection}/>
              <Route exact path="/acknowledge-activation" component={AcknowledgeActivation}/>
              <Route exact path="/select-branch" component={BranchSelection}/>
              <Route exact path="/select-time" component={TimeSelection}/>
              <Route exact path="/cash-deposit" component={CashDeposit}/>
              <Route exact path="/cheque-details" component={ChequeDetails}/>
              <Route exact path="/deposit-cheque" component={DepositCheque}/>
              
              <Route
                exact
                path="/acknowledge-appointment-booking"
                component={AcknowledgeAppointMentBooking}/>
              <Route exact path="/change-address" component={AddressChange}/>
              <Route exact path="/review-address" component={ReviewAddress}/>
              <Route exact path="/scan-qr-code" component={ScanQRCode}/>
              <Route exact path="/acknowledge-checkin" component={AcknowledgeCheckin}/>
              <Route exact path="/dd-telegraphic-transfer" component={DDTelegraphicTransfer}/>
              <Route
                exact
                path="/review-dd-telegraphic-transfer"
                component={ReviewDDTelegraphicTransfer}/>
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
    await Expo
      .Font
      .loadAsync({
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        
        "hsbc-icons": require("./assets/fonts/hsbc/HSBCIcon-Font.ttf")
      });
    this.setState({isReady: true});
  }
}
