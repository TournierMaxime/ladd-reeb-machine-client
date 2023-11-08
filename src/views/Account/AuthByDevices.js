import React from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import authByDevices from "../../styles/pages/authByDevices"
//import QRCodeSvg from "../utils/QRCodeSvg"
import BraceletSvg from "../../utils/BraceletSvg"
import { useNavigation } from "@react-navigation/native"
import home from "../../styles/pages/home"

const AuthByDevices = ({ route }) => {
  const navigation = useNavigation()
  const { imageSrc } = route.params

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ImageBackground source={imageSrc} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>
            Sélectionnez votre méthode de connexion
          </Text>
          <View style={styles.authMethodContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BraceletAuth", {
                  imageSrc,
                })
              }
            >
              <View style={styles.authMethodCardContainer}>
                <BraceletSvg />
              </View>
            </TouchableOpacity>
{/*             <TouchableOpacity
              onPress={() =>
                navigation.navigate("QRCodeAuth", { imageSrc })
              }
            >
              <View style={styles.authMethodCardContainer}>
                <QRCodeSvg />
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: home.image,
  container: authByDevices.container,
  cardContainer: authByDevices.cardContainer,
  title: authByDevices.title,
  authMethodContainer: authByDevices.authMethodContainer,
  authMethodCardContainer: authByDevices.authMethodCardContainer,
})

export default AuthByDevices
