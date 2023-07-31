import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "./Header";
import styles from "./styles";
import Background from "./Background";
import BatterySection from "./BatterySection";
import Status from "./Status";
import ControlIcon from "./ControlIcon";
import Menu from "./Menu/index";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <Background />
      {/* Header */}
      <Header />

      {/* Mileage / Battery Section */}
      <BatterySection />

      {/* Status */}
      <Status />

      <ScrollView>
        {/* Control Icons */}
        <ControlIcon />

        {/* Menu */}
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;
