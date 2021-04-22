import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import BottomNavigator from './BottomNavigator';

const MainNavigator = createStackNavigator(
    {
        BottomNav: BottomNavigator,
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            gestureEnabled: false,
            initialRouteName: 'Liquid',
            cardStyle: { backgroundColor: Colors.white },
        },
    }
);

const TopLevelNavigator = createSwitchNavigator(
    {
        Main: MainNavigator,
    },
    {
        initialRouteName: 'Main',
    }
);

export const AppNavigator = createAppContainer(TopLevelNavigator);
