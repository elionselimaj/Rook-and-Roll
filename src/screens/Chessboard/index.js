import React, { useState } from 'react';
import { View, Button, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const Square = ({ row, col}) => {
    const offset = row % 2 === 0 ? 1:0;
    const backgroundColor = (col + offset) % 2 === 0 ? Colors.primaryBlack: Colors.primaryWhite
    return (
        <View style={{flex: 1, backgroundColor}}/>
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
    const { width, height } = Dimensions.get('window');
    const [zoom, zoomIn] = useState(false);
    return(
        <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
            <View style={{ width: zoom ? width:160, height: zoom ? height/2:160, backgroundColor: 'red'}}>
                {
                    new Array(8).fill(0).map((_, row) => (
                        <Row key={row} row={row} />
                    ))
                }
            </View>
            {/* in case that board does not look clearly*/}
            <Button title={zoom ? 'Zoom out':'Zoom In'} onPress={() => { zoomIn(!zoom)}}/>
        </View>
    )
}
