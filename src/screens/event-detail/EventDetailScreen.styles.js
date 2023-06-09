import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORES, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORES.white,
    marginTop: StatusBar.currentHeight,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    width: Dimensions.get("screen").width,
    height: 300,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:'center'
  },
  names: {
    fontSize: 20,
    color: "#5D3FD3",
    marginBottom: 5,
    textAlign:'center'
  },
  price: {
    fontSize: 20,
    color: "#444",
    marginBottom: 5,
  },
  fechaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  fecha: {
    marginLeft: 8,
    color: COLORES.text,
    fontSize: FONT_SIZE.md,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 10,
  },
  map: {
    height: 250,
    marginVertical: 20,
    borderRadius: 10,
  },
  webButton: {
    textAlign: "center",
    backgroundColor: COLORES.primary,
    color: COLORES.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 100,
    marginTop: 10,
  },
});
