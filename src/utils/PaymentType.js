import React, { Fragment } from "react"
import {
  Text,
  StyleSheet,
  FlatList
} from "react-native"
import order from "../styles/components/order"
import useMeansOfPayment from "../hooks/useMeansOfPayment"

const PaymentType = ({ orderId, paymentTypes, user, walletId, isAnonymous, imageSrc }) => {
  const { meansOfPayment } = useMeansOfPayment(orderId, user, walletId, isAnonymous, imageSrc)

  return (
    <Fragment>
      <Text style={styles.textInfo}>Moyen de paiement</Text>
      <FlatList
        data={paymentTypes}
        keyExtractor={(item) => item.paymentTypeId}
        renderItem={({ item }) => {
          return meansOfPayment(item)
        }}
      />
    </Fragment>
  )
}

const styles = StyleSheet.create({
  textInfo: order.orderRef
})

export default PaymentType
