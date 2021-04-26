import React from 'react';
import { View } from "react-native";
import Board from './Board';

export default () => {
    return(
        <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center'}}>
            <Board />
        </View>
    )
}
