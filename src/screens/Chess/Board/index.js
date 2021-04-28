import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Colors from "../../../constants/Colors";

import Background from "../Background";
import Piece from "../Piece";

const { width } = Dimensions.get("window");

export default ({ chess, onTurn, state }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginBottom: 10, marginLeft: 10, opacity: state.player === 'b' ? 1:0.1 }}>
        <View style={{ width: 20, height: 20, backgroundColor: Colors.black }}/>
        <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{"Black to move"}</Text>
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
      <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10, opacity: state.player === 'w' ? 1:0.1 }}>
        <View style={{ width: 20, height: 20, backgroundColor: Colors.white }}/>
        <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{"White to move"}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width,
    height: width
  }
});

