import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Chessboard from '../screens/Chessboard';
import TicTacToe from '../screens/TicTacToe';
import FooterNav from '../components/Footer';

const config = {
    defaultNavigationOptions: {
        headerShown: false,
    },
};

const ChessNavigator = createStackNavigator(
    {
        Chess: Chessboard,
        path: '/chess',
    },
    config
);

const TicTacToeNavigator = createStackNavigator(
    {
        Tic: TicTacToe,
        path: '/tic',
    },
    config
);

const routes = {
    ChessNavigator,
    TicTacToeNavigator,
};

const tabNavigator = createBottomTabNavigator(routes, {
    tabBarComponent: FooterNav, // pass TabBar here.
});

tabNavigator.path = '';

export default tabNavigator;

