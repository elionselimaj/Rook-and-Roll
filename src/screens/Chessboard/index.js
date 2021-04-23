import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../constants/Colors';

const Square = ({ row, col}) => {
    const offset = row % 2 === 0 ? 1:0;
    const backgroundColor = (col + offset) % 2 === 0 ? Colors.primaryBlack: Colors.primaryWhite
    return (
        <View style={{flex: 1, backgroundColor}}>
            {/*<Text>{row}</Text>*/}
            {/*<Text>{col}</Text>*/}
        </View>
    )
};

const Row = ({row}) => {
    return(
        <View style={{ flex: 1, flexDirection: 'row'}}>
            {
                new Array(8).fill(0).map((_, col) => (
                    <Square key={col} col={col} row={row}/>
                ))
            }
        </View>
    )
};

export default () => {
    return(
        <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
            <View style={{ width:320, height:320, backgroundColor: 'red'}}>
                {
                    new Array(8).fill(0).map((_, row) => (
                        <Row key={row} row={row} />
                    ))
                }
            </View>
        </View>
    )
}
