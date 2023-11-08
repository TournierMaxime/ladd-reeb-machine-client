import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native"
import home from "../../styles/pages/home"
import authByDevices from "../../styles/pages/authByDevices"
import { moderateScale } from "../../utils/Responsive"
import button from "../../styles/components/button"
import { useNavigation } from "@react-navigation/native"

const IsAccount = ({ route }) => {
  const { imageSrc } = route.params
  const navigation = useNavigation()

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ImageBackground source={imageSrc} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Possédez-vous un compte cashless ?</Text>
          <View style={styles.authMethodContainer}>
            <TouchableOpacity
              style={{ marginTop: moderateScale(15) }}
              onPress={() =>
                navigation.navigate("BraceletAuth", {
                  imageSrc,
                })
              }
            >
              <Text style={[styles.accountBtn, { backgroundColor: "#A5008C" }]}>
                Oui je possède un compte
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("AllProducts", { imageSrc, isAnonymous: true })}
              style={{ marginTop: moderateScale(15) }}
            >
              <Text style={[styles.accountBtn, { backgroundColor: "#009DDC" }]}>
                Non je n&apos;ai pas de compte
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: home.image,
  container: authByDevices.container,
  cardContainer: {
    height: "auto",
    width: "100%",
    padding: moderateScale(20),
    borderRadius: moderateScale(5),
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: moderateScale(24),
    color: "white",
  },
  authMethodContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "space-between",
  },
  authMethodCardContainer: authByDevices.authMethodCardContainer,
  accountBtn: button.accountBtn,
})

export default IsAccount
