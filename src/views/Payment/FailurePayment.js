import React, { useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native"
import finalStep from "../../styles/pages/finalStep"
import button from "../../styles/components/button"
import { useNavigation } from "@react-navigation/native"
import home from "../../styles/pages/home"
import Message from "../../utils/Message"
import { useDispatch, useSelector } from "react-redux"
import { getOneOrder } from '../../redux/actions/orders'

const FailurePayment = ({ route }) => {
  const { status, imageSrc, isAnonymous } = route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const order = useSelector((state) => state.getOneOrder.data.order)

  const handleCompleted = () => {
      navigation.navigate("DetailsOrder", {
        orderId: order?.orderId,
        isAnonymous,
        imageSrc,
      })
  }

  useEffect(() => {
    dispatch(getOneOrder(order?.orderId))
  }, [dispatch, order?.orderId])

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ImageBackground source={imageSrc} style={styles.image} />
      <View style={styles.finalStepViewContainer}>
        <View style={styles.finalStepCardContainer}>
          {status === "rejected" ? (
            <Message
              priority={"error"}
              message={
                "Votre commande a échoué.\n\nVous ne serez pas débité pour cette transaction."
              }
            />
          ) : null}
          <Pressable onPress={() => handleCompleted()}>
            <Text style={[styles.accountBtn, { backgroundColor: "#009DDC" }]}>
              Réessayer
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  finalStepViewContainer: finalStep.finalStepViewContainer,
  finalStepCardContainer: finalStep.finalStepCardContainer,
  finalStepTextInstructions: finalStep.finalStepTextInstructions,
  finalStepOrder: finalStep.finalStepOrder,
  finalStepOrderContainer: finalStep.finalStepOrderContainer,
  finalStepDetailsContainer: finalStep.finalStepDetailsContainer,
  title: finalStep.title,
  subTitle: finalStep.subTitle,
  formButtonLogin: button.formButtonLogin,
  accountBtn: button.accountBtn,
  image: home.image,
})

export default FailurePayment
