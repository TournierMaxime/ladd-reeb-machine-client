import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, Pressable } from "react-native"
import payment from "../../styles/pages/payment"
import { getOneOrder } from "../../redux/actions/orders"
import { useDispatch, useSelector } from "react-redux"
import button from "../../styles/components/button"
import { loginWithDevices } from "../../redux/actions/auth"
import { updateOrder } from "../../redux/actions/orders"
import Payment from "../../utils/Payment"
import { Fragment } from "react"

const QRCodePayment = ({ route }) => {
  const { orderId, paymentTypeId, paymentType, walletId, user, paymentMeanId, imageSrc } = route.params
  const dispatch = useDispatch()
  const order = useSelector((state) => state.getOneOrder.data.order)
  const [userData, setUserData] = useState(null)
  const [isLogged, setIsLogged] = useState(false)

  const handleScanQRCode = async () => {
    try {
      const response = await dispatch(loginWithDevices({ userId: user?.userId }))
      setUserData(response.user)
      await dispatch(updateOrder(orderId, { userId: response.user.userId }))
      ToastSuccess("success", "Connexion réussie", true)
      setIsLogged(true)
    } catch (error) {
      console.log(error)
      ToastError("error", error.response.data.errMsg, true)
    }
  }

  useEffect(() => {
    dispatch(getOneOrder(orderId))
  }, [dispatch, orderId])

  return (
    <View style={styles.paymentViewContainer}>
      <View style={styles.paymentCardContainer}>
        <View style={styles.paymentOrderContainer}>
          <Text style={styles.paymentOrder}>Paiement de la commande</Text>
        </View>
        <View style={styles.paymentDetailsContainer}>
          <Text style={styles.title}>Commerçant</Text>
          <Text style={styles.subTitle}>DistriPop</Text>
        </View>
        <View style={styles.paymentDetailsContainer}>
          <Text style={styles.title}>Référence commande</Text>
          <Text style={styles.subTitle}>{order.orderReference}</Text>
        </View>
        <View style={styles.paymentDetailsContainer}>
          <Text style={styles.title}>Montant à régler</Text>
          <Text style={styles.subTitle}>{order.amount + "€"}</Text>
        </View>
        {!userData ? null : (
          <View style={styles.paymentDetailsContainer}>
            <Text style={styles.title}>Utilisateur</Text>
            <Text style={styles.subTitle}>{userData.pseudo}</Text>
          </View>
        )}
        {isLogged ? (
          <Payment orderId={orderId} paymentTypeId={paymentTypeId} walletId={walletId} user={user} paymentMeanId={paymentMeanId} amount={order.amount} paymentType={paymentType} />
        ) : (
          <Fragment>
            <Text style={styles.paymentTextInstructions}>
              Scannez votre QR Code sur la borne
            </Text>
            <Pressable
              style={styles.orderButton}
              onPress={() => handleScanQRCode()}
            >
              <Text style={styles.buttonText}>Simulation scan QR Code</Text>
              <ToastConfig />
            </Pressable>
          </Fragment>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  paymentViewContainer: payment.paymentViewContainer,
  paymentCardContainer: payment.paymentCardContainer,
  paymentTextInstructions: payment.paymentTextInstructions,
  paymentOrder: payment.paymentOrder,
  paymentOrderContainer: payment.paymentOrderContainer,
  paymentDetailsContainer: payment.paymentDetailsContainer,
  title: payment.title,
  subTitle: payment.subTitle,
  orderButton: button.orderButton,
  buttonText: button.buttonText,
})

export default QRCodePayment
