import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SBApp from './storybook';



const App = class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo
      .Font
      .loadAsync({
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        "hsbc-bd": require("./assets/fonts/hsbc/UniversNextforHSBCW02-Bd.ttf"),
        "hsbc-lt": require("./assets/fonts/hsbc/UniversNextforHSBCW02-Lt.ttf"),
        "hsbc-ult": require("./assets/fonts/hsbc/UniversNextforHSBCW02-UltLt.ttf"),
        "hsbc-md": require("./assets/fonts/hsbc/UniversNextforHSBCW02-Md.ttf"),
        "hsbc-rg": require("./assets/fonts/hsbc/UniversNextforHSBCW02-Rg.ttf"),
        "hsbc-icons": require("./assets/fonts/hsbc/HSBCIcon-Font.ttf")
      });
    this.setState({isReady: true});
    console.log('font loaded');
  }
  render() {
    if (!this.state.isReady) {
      return <Text>Getting permission for accessing the camera</Text>;
    }
    else if(__DEV__){
      return <SBApp/>;
    }
    return (
      <View style={styles.container}>
        <Text>App Component</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default App;
