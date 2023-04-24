import { StyleSheet, StatusBar } from 'react-native'
import { FONT_SIZE, COLORES } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 600,
    justifyContent: 'center',
    top: -50
  },
  title: {
    fontSize: FONT_SIZE.xxxl,
    fontWeight: 'bold',
    color: COLORES.white,
    width: '75%',
    marginLeft: 25
  }
})
