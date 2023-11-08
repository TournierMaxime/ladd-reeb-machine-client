import React, { Fragment, useEffect } from "react"
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native"
import devicesConnected from "../../styles/pages/devicesConnected"
import { useDispatch, useSelector } from "react-redux"
import button from "../../styles/components/button"
import { resetAuth } from "../../redux/actions/auth"
import home from "../../styles/pages/home"
import { useNavigation } from "@react-navigation/native"
import Message from "../../utils/Message"
import useHandleScanBracelet from "../../hooks/useHandleScanBracelet"

const BraceletAuth = ({ route }) => {
  const { imageSrc } = route.params
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const isAuthenticated = useSelector((state) => state.loginWithDevices.isAuthenticated)

  const { handleScanBracelet, message, userData } = useHandleScanBracelet()

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        navigation.navigate("AllProducts", {
          imageSrc,
          userId: userData?.userId,
          isAnonymous: false
        })
      }, 200)
    }
  }, [isAuthenticated, userData])

  useEffect(() => {
    return () => {
      dispatch(resetAuth())
    }
  }, [])

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ImageBackground source={imageSrc} style={styles.image} />
      <View style={styles.devicesConnectedViewContainer}>
        <View style={styles.devicesConnectedCardContainer}>
          <Fragment>
            <Text style={styles.devicesConnectedTextInstructions}>
              Scannez votre Bracelet sur la borne
            </Text>
            <Pressable onPress={async () => await handleScanBracelet()}>
              <Text style={[styles.accountBtn, { backgroundColor: "#009DDC" }]}>
                Simulation scan Bracelet
              </Text>
              {message?.success ? (
                <Message priority={"success"} message={message?.success} />
              ) : message?.error ? <Message priority={"error"} message={message?.error} /> : null}
            </Pressable>
          </Fragment>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  devicesConnectedViewContainer: devicesConnected.devicesConnectedViewContainer,
  devicesConnectedCardContainer: devicesConnected.devicesConnectedCardContainer,
  devicesConnectedTextInstructions:
    devicesConnected.devicesConnectedTextInstructions,
  devicesConnectedOrder: devicesConnected.devicesConnectedOrder,
  devicesConnectedOrderContainer:
    devicesConnected.devicesConnectedOrderContainer,
  devicesConnectedDetailsContainer:
    devicesConnected.devicesConnectedDetailsContainer,
  title: devicesConnected.title,
  subTitle: devicesConnected.subTitle,
  orderButton: button.orderButton,
  blueBtn: button.blueBtn,
  formContainer: devicesConnected.formContainer,
  textInput: devicesConnected.textInput,
  textInputContainer: devicesConnected.textInputContainer,
  image: home.image,
  accountBtn: button.accountBtn,
})

export default BraceletAuth
