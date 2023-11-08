import React, { useState, Fragment } from "react"
import { Text, View, StyleSheet, Pressable, ImageBackground } from "react-native"
import { useDispatch } from "react-redux"
import button from "../../styles/components/button"
import devicesConnected from "../../styles/pages/devicesConnected"
import { loginWithDevices } from "../../redux/actions/auth"
import home from "../../styles/pages/home"
import { useNavigation } from "@react-navigation/native"

const QRCodeAuth = ({ route }) => {
  const dispatch = useDispatch()
  // cabler api scan qr code
  // const userId = "6e20a5ca-0ad8-4c50-95d9-fe220b36feef"

  const { imageSrc } = route.params
  const navigation = useNavigation()

  const [userData, setUserData] = useState(null)
  const [isLogged, setIsLogged] = useState(false)

  const handleScanQRCode = async () => {
    try {
      const response = await dispatch(loginWithDevices(/* { userId } */))
      setUserData(response.user)
      ToastSuccess("success", "Connexion réussie", true)
      setIsLogged(true)
    } catch (error) {
      console.log(error)
      ToastError("error", error.response.data.errMsg, true)
    }
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ImageBackground source={imageSrc} style={styles.image} />
      <View style={styles.devicesConnectedViewContainer}>
        <View style={styles.devicesConnectedCardContainer}>
          {isLogged && userData ? (
                        setTimeout(() => {
              navigation.navigate('CashLess', { imageSrc, credits, userData })
            }, 200)
          ) : (
            <Fragment>
              <Text style={styles.devicesConnectedTextInstructions}>
                Scannez votre QR Code sur la borne
              </Text>
              <Pressable
                style={styles.orderButton}
                onPress={() => handleScanQRCode()}
              >
                <Text style={styles.buttonText}>Simulation scan QR Code</Text>
              </Pressable>
            </Fragment>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: devicesConnected.container,
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
  buttonText: button.buttonText,
  //image: devicesConnected.image,
  image: home.image,
})

export default QRCodeAuth
