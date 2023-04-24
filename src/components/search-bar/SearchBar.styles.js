import { StyleSheet } from 'react-native'
import { COLORES } from '../../utils/theme'

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORES.white,
    borderRadius: 20,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  buscador: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333'
  }
})
