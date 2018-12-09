import {createStackNavigator} from 'react-navigation';
import Home from './screens/home';

const RootNavigator = createStackNavigator({
    Home: Home
});

export default RootNavigator;
