import React from 'react'
import { ImageBackground } from 'react-native'
import BackgroundStyle from './BackgroundStyle'

const Background = () => {
  return (
    <ImageBackground
        source={require("../../assets/background.png")}
        style={BackgroundStyle.backgroundImage}
     />
  )
}

export default Background;