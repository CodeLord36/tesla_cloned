import { StyleSheet } from "react-native";

const BatterySStyle = StyleSheet.create({
  // your styles here
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12
  },

  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold"
  },
});

export default BatterySStyle;
