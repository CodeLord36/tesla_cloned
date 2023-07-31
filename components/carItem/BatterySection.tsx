import React from 'react'
import BatterySStyle from './BatterySStyle';
import { View, ImageBackground, Text } from 'react-native'

const BatterySection = () => {
  return (
    <View style={BatterySStyle.batterySection}>
      <ImageBackground
        source={require("../../assets/battery.png")}
        style={BatterySStyle.batteryImage}
      />

      <Text style={BatterySStyle.batteryText}>
        150 mi
      </Text>

    </View>
  );
}

export default BatterySection;
