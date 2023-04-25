import React, { useContext } from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from 'react-native-maps'
import { styles } from './EventDetailScreen.styles'
import { AntDesign } from '@expo/vector-icons'
import { COLORES } from '../../utils/theme'
import { Link } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import { useNavigation } from "@react-navigation/native";
export const EventDetailScreen = ({ route }) => {
  const { item } = route.params
  const { currentUser } = useContext(UserContext)
  const navigation = useNavigation()

  const handleLogin = () => {
      navigation.navigate("Profile");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image
              key={idx}
              source={{ uri: `https://drive.google.com/uc?id=${image}` }}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.names}>{item.names}</Text>
        <Text style={styles.title}>{item.presentacion}</Text>
        <View style={styles.fechaContainer}>
          <AntDesign name="calendar" size={20} color={COLORES.primary} />
          <Text style={styles.fecha}>{item.fecha}</Text>
        </View>
        {currentUser ? (
          <>
            <Link
              style={styles.webButton}
              to={{ screen: "EventDetailWeb", params: { url: item.url } }}
            >
              Visitar
            </Link>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: item.locationCoordinates.latitude,
                longitude: item.locationCoordinates.longitude,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
              }}
            >
              <Marker
                coordinate={{
                  latitude: item.locationCoordinates.latitude,
                  longitude: item.locationCoordinates.longitude,
                }}
                title={item.title}
              />
            </MapView>
          </>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.webButton}>Mas Info</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ScrollView>
  );
}
