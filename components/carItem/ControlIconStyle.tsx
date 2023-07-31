import { StyleSheet } from "react-native";

const ControlIconStyle = StyleSheet.create ({
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 175,
  },

  controlButtons: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
    marginLeft: 25
  },

  icon: {
    color: "white"
  }
});

export default ControlIconStyle;
