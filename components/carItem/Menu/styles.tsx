import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  menuRows: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    color: "white",
  },

  menuTextBox: {
    flexGrow: 1,
  },

  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    textTransform: "uppercase",
  },

  menuSubText: {
    color: "grey",
    fontSize: 14,
    marginLeft: 15,
  },

  arrowIcon: {
    color: "#4D4D4E"
  }
});

export default styles