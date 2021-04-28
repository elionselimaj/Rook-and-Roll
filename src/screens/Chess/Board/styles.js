import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width,
    height: width
  },
  player: { flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10 },
  playerDetails: { width: 20,
    height: 20,
  },
  playerText: { marginLeft: 5,
    fontWeight: 'bold'
  }
});
