import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Button, Alert} from 'react-native';
import Colors from '../../constants/Colors';
import whitePawn from '../../../assets/white_pawn.svg';
import blackPawn from '../../../assets/black_pawn.svg';
import SvgUri from 'react-native-svg-uri';

export default () => {
    const [gameState, setGameState] = useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]);
    const [currentPlayer, setCurrentPlayer] = useState(1);

    const initializeGame = () => {
        setGameState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])
    };
    const getWinner = () => {
        const NUMTILES = 5; // 5
        let sum;
        const arr = gameState;
        for(let i = 0; i < NUMTILES; i++){
            sum = arr[i][0] + arr[i][1] + arr[i][2] + arr[i][3] + arr[i][4];
            if(sum === 5){
                return 1;
            } else if (sum === -5) {
                return -1;
            }
        }

        for(let i = 0; i < NUMTILES; i++){
            sum = arr[0][i] + arr[1][i] + arr[2][i] + arr[3][i] + arr[4][i];
            if(sum === 5){
                return 1;
            } else if (sum === -5) {
                return -1;
            }
        }

        sum = arr[0][0] + arr[1][1] + arr[2][2] + arr[3][3] + arr[4][4];
        if(sum === 5){
            return 1;
        } else if (sum === -5) {
            return -1;
        }

        sum = arr[4][0] + arr[3][1] + arr[2][2] + arr[1][3] + arr[0][4];
        if(sum === 5){
            return 1;
        } else if (sum === -5) {
            return -1;
        }

        return 0;

    };

    const onNewGame = () => {
        initializeGame();
    };

    const onTilePress = (row, col) => {
       let value = gameState[row][col];
        if (value !== 0) {
            console.log('value !== 0');
            return;
        }
        const player = currentPlayer;
        const arr = gameState.slice();
        arr[row][col] = player;
        setGameState(arr);

        const nextPlayer = (player === 1 ) ? -1: 1;
        setCurrentPlayer(nextPlayer);

        let winner = getWinner();
        if (winner === 1) {
            Alert.alert('Player 1 is the winner');
            initializeGame();
        }else if (winner === -1){
            Alert.alert('Player 2 is the winner');
            initializeGame();
        }
    };

    const renderIcon = (row, col) => {
        const value = gameState[row][col];
        switch(value){
            case 1: return <SvgUri
                width="50"
                height="50"
                source={whitePawn}
            />;
            case -1 : return  <SvgUri
                width="50"
                height="50"
                source={blackPawn}
            />;
            default: return <View />;
        }
    };


    return(
        <View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={() => onTilePress(0,0)} style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0, borderColor: Colors.primaryBlack}]}>
                        {renderIcon(0, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(0,1)} style={[styles.tile, { borderTopWidth: 0, borderColor: Colors.primaryBlack}]} >
                        {renderIcon(0, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(0,2)} style={[styles.tile, { borderTopWidth: 0, borderColor: Colors.primaryBlack}]} >
                        {renderIcon(0, 2)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(0,3)} style={[styles.tile, { borderTopWidth: 0, borderColor: Colors.primaryBlack}]} >
                        {renderIcon(0, 3)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(0,4)} style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0, borderColor: Colors.primaryBlack}]}>
                        {renderIcon(0, 4)}
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={() => onTilePress(1,0)} style={[styles.tile, { borderLeftWidth: 0, borderColor: Colors.primaryBlack}]} >
                        {renderIcon(1, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(1,1)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                        {renderIcon(1, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(1,2)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                        {renderIcon(1, 2)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(1,3)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                        {renderIcon(1, 3)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(1,4)} style={[styles.tile, { borderRightWidth: 0, borderColor: Colors.primaryBlack}]}>
                        {renderIcon(1, 4)}
                    </TouchableOpacity>
                </View>

            <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={() => onTilePress(2,0)} style={[styles.tile, { borderLeftWidth: 0, borderColor: Colors.primaryBlack}]} >
                    {renderIcon(2, 0)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTilePress(2,1)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                    {renderIcon(2, 1)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTilePress(2,2)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                    {renderIcon(2, 2)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTilePress(2,3)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                    {renderIcon(2, 3)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTilePress(2,4)} style={[styles.tile, { borderRightWidth: 0, borderColor: Colors.primaryBlack}]}>
                    {renderIcon(2, 4)}
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity onPress={() => onTilePress(3,0)} style={[styles.tile, { borderLeftWidth: 0, borderColor: Colors.primaryBlack}]} >
                    {renderIcon(3, 0)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTilePress(3,1)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                    {renderIcon(3, 1)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTilePress(3,2)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                    {renderIcon(3, 2)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTilePress(3,3)} style={[styles.tile, { borderColor: Colors.primaryBlack}]}>
                    {renderIcon(3, 3)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTilePress(3,4)} style={[styles.tile, { borderRightWidth: 0, borderColor: Colors.primaryBlack}]}>
                    {renderIcon(3, 4)}
                </TouchableOpacity>
            </View>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={() => onTilePress(4,0)} style={[styles.tile, { borderLeftWidth: 0, borderBottomWidth: 0, borderColor: Colors.primaryBlack}]}>
                        {renderIcon(4, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(4,1)} style={[styles.tile, { borderBottomWidth: 0, borderColor: Colors.primaryBlack}]} >
                        {renderIcon(4, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(4,2)} style={[styles.tile, { borderBottomWidth: 0, borderColor: Colors.primaryBlack}]} >
                        {renderIcon(4, 2)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(4,3)} style={[styles.tile, { borderBottomWidth: 0, borderColor: Colors.primaryBlack}]} >
                        {renderIcon(4, 3)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onTilePress(4,4)} style={[styles.tile, { borderRightWidth: 0, borderBottomWidth: 0, borderColor: Colors.primaryBlack}]}>
                        {renderIcon(4, 4)}
                    </TouchableOpacity>
                </View>

                <Button title="New Game" onPress={onNewGame}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tile: {
        borderWidth: 2,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

