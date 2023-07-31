import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import ControlIconStyle from './ControlIconStyle';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFan, faKey, faLock, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ControlIcon = () => {
  const [locked, setLocked] = useState(false)
  const clickLock = () => {
    if (locked) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  }

  return (
    <View style={ControlIconStyle.controls}>
      <TouchableOpacity>
        <View style={ControlIconStyle.controlButtons}>
          <FontAwesomeIcon
            style={ControlIconStyle.icon}
            icon={faFan}
            size={24}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={ControlIconStyle.controlButtons}>
          <FontAwesomeIcon
            style={ControlIconStyle.icon}
            icon={faKey}
            size={24}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={clickLock}
      >
        <View style={ControlIconStyle.controlButtons}>
          <FontAwesomeIcon
            style={ControlIconStyle.icon}
            icon={locked ? faLock : faUnlockKeyhole}
            size={24}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ControlIcon