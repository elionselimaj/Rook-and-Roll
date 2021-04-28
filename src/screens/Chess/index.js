import React, { useCallback, useRef, useState }  from 'react';
import { View } from "react-native";
import Board from './Board';
import { Chess } from 'chess.js';

const useConst = (initialValue) => {
  const ref = useRef();
  if (ref.current === undefined) {
    // Box the value in an object so we can tell if it's initialized even if the initializer
    // returns/is undefined
    ref.current = {
      value: typeof initialValue === 'function'
        ? // eslint-disable-next-line @typescript-eslint/ban-types
        initialValue()
        : initialValue
    };
  }
  return ref.current.value;
};

export default () => {
  const chess = useConst(() => new Chess());
  const [state, setState] = useState({
    player: 'w',
    board: chess.board()
  });
  const onTurn = useCallback(() => {
    setState({
      player: state.player === 'w' ? 'b' : 'w',
      // current state of the board
      board: chess.board()
    });
  }, [chess, state.player]);
    return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Board chess={chess} onTurn={onTurn} state={state}/>
        </View>
    )
}
