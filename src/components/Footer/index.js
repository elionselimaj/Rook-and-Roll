import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import {styles} from './styles';
import ticTacToe from '../../../assets/tic-tac-toe.png';
import ticTacToeActive from '../../../assets/tic-tac-toe-active.png';

export default ({navigation}) => {
    const [activeTab, setActiveTab] = useState('chess');
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
                            setActiveTab('chess');
                            navigation.navigate('Chess');
                        }}
                    >
                        <MaterialCommunityIcons
                            size={26}
                            name="checkerboard"
                            color={activeTab === 'chess' ? Colors.primaryBlack : Colors.menuGrayColor}
                            onPress={() => {
                                setActiveTab('chess');
                                navigation.navigate('Chess');
                            }}
                        />
                    </TouchableWithoutFeedback>
                    <Text style={{
                        marginTop: 2,
                        color: activeTab === 'chess' ? Colors.primaryBlack : Colors.menuGrayColor
                    }}>Chess</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            setActiveTab('tic');
                            navigation.navigate('Tic');
                        }}
                    >
                        <Image
                            source={activeTab === 'tic' ? ticTacToeActive : ticTacToe}
                            style={{width: 26, height: 26}}
                        />
                    </TouchableWithoutFeedback>
                    <Text
                        style={{marginTop: 2, color: activeTab === 'tic' ? Colors.primaryBlack : Colors.menuGrayColor}}>Tic
                        Tac Toe</Text>

                </View>
            </View>
        </View>
    );
};
