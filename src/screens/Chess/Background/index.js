import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';


const Square = ({ white, row, col}) => {
  const backgroundColor = white ? Colors.primaryBlack: Colors.primaryWhite;
  const color = white ? Colors.white : Colors.black;
  const textStyle = { fontWeight: "500", color };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        padding: 4,
        justifyContent: "space-between",
      }}
    >
      <Text style={[textStyle, { opacity: col === 0 ? 1 : 0 }]}>
        {"" + (8 - row)}
      </Text>
      {row === 7 && (
        <Text style={[textStyle, { alignSelf: "flex-end" }]}>
          {String.fromCharCode(97 + col)}
        </Text>
      )}
    </View>
  )
};

const Row = ({ white, row }) => {
  const offset = white ? 0 : 1;
  return(
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {new Array(8).fill(0).map((_, i) => (
        <Square row={row} col={i} key={i} white={(i + offset) % 2 === 1} />
      ))}
    </View>
  )
};

export default () => {

  return(
    <View style={{ flex: 1 }}>
      {new Array(8).fill(0).map((_, i) => (
        <Row key={i} white={i % 2 === 0} row={i} />
      ))}
    </View>
  )
}


