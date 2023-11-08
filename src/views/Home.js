import React, { useCallback } from "react"
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { moderateScale } from "../utils/Responsive"
import useHandleChangeImage from '../hooks/useHandleChangeImage'

const HomeScreen = () => {
  const { handleChangeImage, handlePress, images, imageSelected } = useHandleChangeImage()

  useFocusEffect(
    useCallback(() => {
      handleChangeImage();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageSelected !== null ? images[imageSelected] : require("../../assets/image/home/home-page1.jpg")}
        style={styles.image}
      />
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.textContainer}>
            <Image
              source={require("../../assets/image/beer-neon.png")}
              style={styles.imageIcon}
            />
            <Text style={styles.text}>
              Cliquez ici pour passer votre commande
            </Text>
          </View>
        </TouchableOpacity>
        {/*           <View style={styles.textContainer}>
            <Image source={require('../../assets/image/QRC-background.jpg')} style={styles.imageIcon} />
            <Text style={styles.text}>Cliquez ici pour scanner votre QR Code et récupérer votre commande</Text>
          </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageIcon: {
    resizeMode: "contain",
    width: moderateScale(100),
    height: moderateScale(100),
    marginRight: moderateScale(15),
  },
  cardContainer: {
    position: "absolute",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(0),
  },
  textContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: moderateScale(10),
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: moderateScale(30),
    borderRadius: moderateScale(10),
  },
  text: {
    color: "#fff",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default HomeScreen
