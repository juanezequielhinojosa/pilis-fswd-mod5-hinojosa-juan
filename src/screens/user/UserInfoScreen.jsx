import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserInfoScreen.styles'
import { UserContext } from '../../contexts/UserContext'

export const UserInfoScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require("../../../assets/images/avatar.png")}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{currentUser.username}</Text>
          <Text style={styles.profileLocation}>Jujuy, Argentina</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Acerca de mi</Text>
        <Text style={styles.sectionText}>
          Desde el año 2018 hasta el 2022 me desempeño en el campo de la
          programación informática, tengo dominio de distintos lenguajes de
          programación, a lo largo de las distintas materias de la carrera de
          Analista Programador participe y desarrolle distintos proyectos.
        </Text>
        <Text style={styles.sectionTitle}>Interests</Text>
        <Text style={styles.sectionText}>
          Me intereasa trabajar como programador y mejorar dia a dia mis habilidades tecnicas.
        </Text>
      </View>
    </ScrollView>
  );
}
