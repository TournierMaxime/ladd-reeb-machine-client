import React, { Fragment } from "react"
import { Text, StyleSheet, Pressable, ActivityIndicator } from "react-native"
import button from "../styles/components/button"
import Message from "../utils/Message"
import useDeleteOrder from '../hooks/useDeleteOrder'
import useHandlePayment from "../hooks/useHandlePayment"

const Payment = ({
  orderId,
  paymentTypeId,
  paymentType,
  walletId,
  user,
  paymentMeanId,
  amount,
  isAnonymous,
  imageSrc
}) => {

  const { handleDeleteOrder } = useDeleteOrder(orderId, isAnonymous, user, imageSrc)
  const { handlePayment, isProcessingPayment, visible, message, status } = useHandlePayment(orderId, paymentTypeId, walletId, paymentMeanId, amount, imageSrc, user?.userId, paymentType, isAnonymous)

  return (
    <Fragment>
      {isProcessingPayment ? (
        <Pressable>
          <Text style={[styles.accountBtn, { backgroundColor: "#009DDC" }]}>
            Traitement du paiement <ActivityIndicator color="white" size={'large'} />
          </Text>
        </Pressable>
      ) : (
        <Fragment>
          <Pressable onPress={async () => await handlePayment(status)}>
            <Text style={[styles.accountBtn, { backgroundColor: "#009DDC" }]}>
              Simulation paiement
            </Text>
            </Pressable>
            
          {visible ? (
            <Pressable onPress={async () => await handleDeleteOrder()}>
              <Text style={styles.deteteBtn}>Annuler</Text>
            </Pressable>
          ) : null}
            
        </Fragment>
      )}
      {message?.success ? (
        <Message priority={"success"} message={message?.success} />
      ) : message?.error ? (
        <Message priority={"error"} message={message?.error} />
      ) : null}
    </Fragment>
  )
}

const styles = StyleSheet.create({
  orderButton: button.orderButton,
  accountBtn: button.accountBtn,
  deteteBtn: button.deleteBtn,
})

export default Payment
