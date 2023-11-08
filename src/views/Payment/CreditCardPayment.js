import React, { useEffect, Fragment } from "react"
import { Text, View, StyleSheet, ImageBackground } from "react-native"
import payment from "../../styles/pages/payment"
import { getOneOrder } from "../../redux/actions/orders"
import { useDispatch, useSelector } from "react-redux"
import button from "../../styles/components/button"
import Payment from "../../utils/Payment"
import home from "../../styles/pages/home"
import { resetTransaction } from "../../redux/actions/transactions"

const CreditCardPayment = ({ route }) => {
  const {
    orderId,
    paymentTypeId,
    paymentType,
    walletId,
    user,
    paymentMeanId,
    isAnonymous,
    imageSrc,
  } = route.params
  const dispatch = useDispatch()
  const order = useSelector((state) => state.getOneOrder.data.order)

  useEffect(() => {
    dispatch(getOneOrder(orderId))
  }, [dispatch, orderId])

  useEffect(() => {
    return () => {
      dispatch(resetTransaction())
    }
  }, [])

  return (
    <Fragment>
      <ImageBackground
        source={imageSrc}
        style={[styles.image, { position: "absolute" }]}
      />
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
            <Text style={styles.subTitle}>{order?.orderReference}</Text>
          </View>
          <View style={styles.paymentDetailsContainer}>
            <Text style={styles.title}>Montant à régler</Text>
            <Text style={styles.subTitle}>{order?.amount + "€"}</Text>
          </View>
          <Text style={styles.paymentTextInstructions}>
            Suivez les instructions sur le terminal de paiement en dessous de la
            borne
          </Text>
          <Payment
            orderId={orderId}
            paymentTypeId={paymentTypeId}
            walletId={walletId}
            user={user}
            paymentMeanId={paymentMeanId}
            amount={order?.amount}
            isAnonymous={isAnonymous}
            imageSrc={imageSrc}
            paymentType={paymentType}
          />
        </View>
      </View>
    </Fragment>
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
  image: home.image,
})

export default CreditCardPayment
