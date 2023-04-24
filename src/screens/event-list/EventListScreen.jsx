import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventListScreen.styles'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getEventList } from '../../api/event.service'

export const EventListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventList, setEventList] = useState([])
  const [cargando, setCargando] = useState(false)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredEvents = eventList.filter(evento => (
    evento.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    setCargando(true)
    getEventList()
      .then(data => {
        setEventList(data)
        setCargando()
      })
      .catch(err => console.log(err))
  }, [])

  const events = ({ item }) => (
    <>
      <Pressable
        onPress={() => navigation.navigate('EventDetail', { item })}
      >
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }}
            style={styles.itemImage}
          />
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.presentacion}</Text>
        </View>
      </Pressable>
    </>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      {cargando && <Text style={styles.itemTitle}>Cargando...</Text>}
      <FlatList
        data={filteredEvents}
        renderItem={events}
        keyExtractor={(item) => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
