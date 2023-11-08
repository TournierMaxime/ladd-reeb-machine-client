import React, { useEffect } from "react"
import { View, StyleSheet, ImageBackground } from "react-native"
import finalStep from "../../styles/pages/finalStep"
import button from "../../styles/components/button"
import { useNavigation } from "@react-navigation/native"
import home from "../../styles/pages/home"
import Message from "../../utils/Message"
import { useSelector, useDispatch } from "react-redux"
import { getOneWallet } from '../../redux/actions/wallet'

const SuccessFullPayment = ({ route }) => {
  const { status, imageSrc, isAnonymous, userId, paymentType } = route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleCompleted = async () => {
    navigation.navigate("PendingOrder", { imageSrc, isAnonymous })
  }

  const wallet = useSelector((state) => state.getOneWallet.data.wallet)

  useEffect(() => {
    dispatch(getOneWallet(userId))
    setTimeout(() => {
      handleCompleted()
    }, 3000)
  }, [dispatch, userId])

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ImageBackground source={imageSrc} style={styles.image} />
      <View style={styles.finalStepViewContainer}>
        <View style={styles.finalStepCardContainer}>
          {status === "accepted" && isAnonymous === true ? (
            <Message
              priority={"success"}
              message={`Votre commande a bien été réalisée avec succès.\n\nNous allons préparer votre commande.`}
            />
          ) : (
            <Message
              priority={"success"}
              message={`Votre commande a bien été réalisée avec succès.\n\n${paymentType === 'Bracelet' ? `Votre nouveau solde est de ${wallet?.credits}€.\n\n` : ''}Nous allons préparer votre commande.`}
            />
          )}
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

export default SuccessFullPayment
