import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './SearchBar.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORES } from '../../utils/theme'

export const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name='search' size={35} color={COLORES.primary} />
      <TextInput
        placeholder='¿Cual Evento Politico Buscas?'
        style={styles.buscador}
        onChangeText={handleSearch}
        value={searchQuery}
      />
    </View>
  )
}
