import React from "react";
import { View, Text } from "react-native";
import Colors from "../../../constants/Colors";
import { styles } from './styles';

import Background from "../Background";
import Piece from "../Piece";


export default ({ chess, onTurn, state }) => {
  return (
    <View>
      <View style={[styles.player, {opacity: state.player === 'b' ? 1:0.1}]}>
        <View style={[styles.playerDetails, { backgroundColor: Colors.black }]}/>
        <Text style={styles.playerText}>{"Black to move"}</Text>
      </View>
      <View style={styles.container}>
        <Background/>
        {state.board.map((row, y) =>
          row.map((piece, x) => {
            if (piece !== null) {
              return (
                <Piece
                  key={`${x}-${y}`}
                  id={`${piece.color}${piece.type}`}
                  startPosition={{ x, y }}
                  chess={chess}
                  onTurn={onTurn}
                  enabled={state.player === piece.color}
                />
              );
            }
            return null;
          })
        )}
      </View>
      <View style={[styles.player, {opacity: state.player === 'w' ? 1:0.1}]}>
        <View style={[styles.playerDetails, { backgroundColor: Colors.white }]}/>
        <Text style={styles.playerText}>{"White to move"}</Text>
      </View>
    </View>
  );
}
