import React from 'react';
import Amplify from 'aws-amplify';
import RootNavigator from './RootNavigator';
import StorybookUIRoot from './storybook';

Amplify.configure({
  Auth: {
    identityPoolId: 'eu-west-1:e76efaf4-96f2-4c5b-92c2-433a0c24d173',
    region: 'eu-west-1',
    mandatorySignIn: false
  },
  Interactions: {
    bots: {
      "BuyTravelInsurance": {
        "name": "BuyTravelInsurance",
        "alias": "$LATEST",
        "region": "eu-west-1"
      }
    }
  }
});


const App =  __DEV__ ? StorybookUIRoot : RootNavigator;
export default App;
