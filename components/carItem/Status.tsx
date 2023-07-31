import React from "react";
import { View, Text } from "react-native";
import StatusStyle from "./StatusStyle";

const Status = () => {
  return (
    <View style={StatusStyle.status}>
      <Text style={StatusStyle.statusText}>Parked</Text>
    </View>
  );
};

export default Status;
