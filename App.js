import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
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
    AcknowledgeAppointMentBooking
} from './screens';

const serviceToScreenIdMap = {
  "cash-deposit": "cashDeposit",
  "address-change": "addressChange"
};

const screenMap = {
  "accountDetailsVerificationComponent": AccountDetails,
  "smsVerificationComponent": SmsCodeVerification,
  "acknowledgeActivation" : AcknowledgeActivation,
  "branchSelection" : BranchSelection,
  "timeSelection" : TimeSelection,
  "serviceSelection" : ServiceSelection,
  "cashDeposit": CashDeposit,
  "acknowledgeAppointMentBooking": AcknowledgeAppointMentBooking
};

const screenHLayoutConfig = {
  "accountDetailsVerificationComponent": {
    title: "Mobile Security",
    headerBGColor: "#262626"
  }, 
  "smsVerificationComponent": {
    title: "Mobile Security",
    headerBGColor: "#262626"
  },
  "acknowledgeActivation" : {
    title: "Mobile Security",
    headerBGColor: "#262626"
  },
  "branchSelection": {
    title: "Book Appointment",
    subtitle: "Select Branch",
    headerBGColor: "#262626"
  },
  "timeSelection": {
    title: "Book Appointment",
    subtitle: "Prefered Time",
    headerBGColor: "#262626"
  },
  "serviceSelection": {
    title: "Select Service",
    headerBGColor: "#262626"
  },
  "cashDeposit": {
    title: "Cash Deposit",
    "subtitle": "Enter Denominations",
    headerBGColor: "#262626"
  },
  "acknowledgeAppointMentBooking": {
    title: "Token Generated",
    headerBGColor: "#262626",
    contentBackgroundColor: "#76612C"
  }
};
const getScreenPropsMap = (obj) => {
  const accountDetailsProps = {
      onAccountNumberSubmit : obj.onAccountNumberSubmit
    };
    const smsVerificationProps = {
      onSMSVerified: obj.onSMSVerified
    };

    const acknowledgeActivationProps = {
      onAcknowledgementReceived: obj.onAcknowledgementReceived
    };

    const branchSelectionProps = {
      onBranchSelection: obj.onBranchSelection
    }

    const timeSelectionProps = {
      onSlotSelection: obj.onSlotSelection
    }

    const serviceSelectionProps = {
      onServiceSelection: obj.onServiceSelection
    }
    
    const cashDepositProps = {
      bookCashDepositAppointment: obj.bookCashDepositAppointment
    }

    const screenPropsMap = {
      "accountDetailsVerificationComponent": accountDetailsProps,
      "smsVerificationComponent": smsVerificationProps,
      "acknowledgeActivation" :acknowledgeActivationProps,
      "branchSelection": branchSelectionProps,
      "serviceSelection": serviceSelectionProps,
      "timeSelection" : timeSelectionProps,
      "cashDeposit": cashDepositProps
    };
    return screenPropsMap;
}

export default class App extends React.Component {
  onAccountNumberSubmit(accountNumber){
    this.setState({
      currentScreen: "accountDetailsVerificationComponent"
    });
  }

  onSMSVerified(){
    this.setState({
      currentScreen: "acknowledgeActivation"
    });
  }

  onAcknowledgementReceived(){
    this.setState({
      currentScreen: "branchSelection"
    });
  }

  onBranchSelection() {
    this.setState({
      currentScreen: "timeSelection"
    });
  }

  onSlotSelection(){
    this.setState({
      currentScreen: "serviceSelection"
    });
  }

  onServiceSelection(selectedService) {
    const currentScreen = serviceToScreenIdMap[selectedService] ? serviceToScreenIdMap[selectedService] : "addressChange";
    this.setState({
      currentScreen 
    });
  }
  constructor(){
    super();
    this.state = {
      isReady: false,
      currentScreen: "acknowledgeAppointMentBooking"

    };
    this.onAccountNumberSubmit = this.onAccountNumberSubmit.bind(this);
    this.onSMSVerified = this.onSMSVerified.bind(this);
    this.onAcknowledgementReceived = this.onAcknowledgementReceived.bind(this);
    this.onBranchSelection = this.onBranchSelection.bind(this);
    this.onSlotSelection = this.onSlotSelection.bind(this);
    this.onServiceSelection = this.onServiceSelection.bind(this);
    this.bookCashDepositAppointment = this.bookCashDepositAppointment.bind(this);

    this._screenPropsMap = getScreenPropsMap(this);
  }
  
  bookCashDepositAppointment(cashDepositDetails){
    alert("book cash deposit appointment with total cash "+ cashDepositDetails.totalSum);
  }

  render() {
    const {currentScreen} = this.state;
    if(!this.state.isReady){
      return (<View>
        <ReactText>Loading screens</ReactText>
      </View>)
    }
    
    
    
    const CurrentScreen = screenMap[currentScreen];
    const currentScreenProps = this._screenPropsMap[currentScreen] || {};
    
    return (
      <NativeRouter>
        <StyleProvider style = {getTheme(hsbcVariables)}>
          <Layout 
            headerText = {screenHLayoutConfig[currentScreen].title} 
            subtitle = {screenHLayoutConfig[currentScreen].subtitle || ''}
            headerBGColor = {screenHLayoutConfig[currentScreen].headerBGColor || ''}
            contentBackgroundColor = {screenHLayoutConfig[currentScreen].contentBackgroundColor || ''}
            >
            <Route exact path="/" component={AccountDetails}/>
            
          </Layout>
        </StyleProvider>
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

