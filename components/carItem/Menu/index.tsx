import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMusic, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import items from './items';


const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((items) => (   
        <TouchableOpacity key={items.id}>
          <View style={styles.menuRows}>
            <FontAwesomeIcon style={styles.icon} icon={items.icon} size={24} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{items.title}</Text>
              {items.subTitle && (
                <Text style={styles.menuSubText}>{items.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon
              style={styles.arrowIcon}
              icon={faChevronRight}
              size={24}
            />
          </View>
        </TouchableOpacity>
      ))}
      
    </View>
  );
};

export default Menu;