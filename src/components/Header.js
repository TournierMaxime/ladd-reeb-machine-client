import React from "react"
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native"
import { useFonts } from "expo-font"
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { moderateScale } from "../utils/Responsive"
import { Header } from "@rneui/themed"
import { useSelector } from "react-redux"

const HeaderComponent = ({ backButton }) => {
  const navigation = useNavigation()
  const isAuthenticated = useSelector(
    (state) => state.loginWithDevices.isAuthenticated
  )
  const user = useSelector((state) => state.loginWithDevices.data.user)

  const [loaded] = useFonts({
    DistriPop: require("../../assets/fonts/neon-light.otf"),
  })

  const goBackButton = () => {
    return (
      <Ionicons
        style={{ marginRight: moderateScale(10) }}
        name="arrow-back"
        size={moderateScale(25)}
        color="black"
      />
    )
  }

  if (!loaded) {
    return null
  }

  return (
    <Header
      elevated
      backgroundColor="#FFF"
      leftContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      leftComponent={
        backButton === true ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>{goBackButton()}</View>
          </TouchableOpacity>
        ) : null
      }
      containerStyle={{ height: moderateScale(80) }}
      centerComponent={
        <Image
          source={require("../../assets/image/header-neon.png")}
          style={styles.image}
        />
      }
      rightComponent={
        isAuthenticated ? (
          <View>
            <View><Text style={styles.user}><FontAwesome name="user-o" size={moderateScale(14)} color="black" />&nbsp;&nbsp;{user?.pseudo}</Text></View>
            <View><Text style={styles.user}><AntDesign name="wallet" size={moderateScale(14)} color="black" />&nbsp;&nbsp;{user?.Wallet?.credits}€</Text></View>
          </View>
        ) : null
      }
      rightContainerStyle={{
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
      }}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: moderateScale(230),
  },
  user: {
    fontSize: moderateScale(14)
  },
})

export default HeaderComponent
