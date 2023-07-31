import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HeaderStyle from "./HeaderStyle";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faToolbox } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <View style={HeaderStyle.carHeader}>
      <TouchableOpacity>
        <FontAwesomeIcon style={HeaderStyle.icon} icon={faGear} size={24} />
      </TouchableOpacity>
      <Text style={HeaderStyle.headerTitle}>T E S L A</Text>
      <TouchableOpacity>
        <FontAwesomeIcon style={HeaderStyle.icon} icon={faToolbox} size={24} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

// const styles = StyleSheet.create({
//   carHeader: {},
// });
