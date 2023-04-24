import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/images/fondo3.png')}>
        <Text style={styles.title}>
          Elecciones en Jujuy 2023
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}
