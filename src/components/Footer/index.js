import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import {styles} from './styles';
import ticTacToe from '../../../assets/tic-tac-toe.png';
import ticTacToeActive from '../../../assets/tic-tac-toe-active.png';

export default ({navigation}) => {
    const isChessTabActive = navigation?.state?.index === 0;
    return (
        <View style={styles.container}>
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: Colors.white,
                    x: 0,
                    y: 0,
                    style: {marginVertical: 5},
                    bottom: 0,
                    width: '100%',
                    height: 80,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                }}
            >
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            navigation.navigate('Chess');
                        }}
                    >
                        <MaterialCommunityIcons
                            size={26}
                            name="checkerboard"
                            color={isChessTabActive ? Colors.primaryBlack : Colors.menuGrayColor}
                            onPress={() => {
                                navigation.navigate('Chess');
                            }}
                        />
                    </TouchableWithoutFeedback>
                    <Text style={{
                        marginTop: 2,
                        color: isChessTabActive ? Colors.primaryBlack : Colors.menuGrayColor
                    }}>Chess</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            navigation.navigate('Tic');
                        }}
                    >
                        <Image
                            source={!isChessTabActive ? ticTacToeActive : ticTacToe}
                            style={{width: 26, height: 26}}
                        />
                    </TouchableWithoutFeedback>
                    <Text
                        style={{marginTop: 2, color: !isChessTabActive ? Colors.primaryBlack : Colors.menuGrayColor}}>Tic
                        Tac Toe</Text>

                </View>
            </View>
        </View>
    );
};
