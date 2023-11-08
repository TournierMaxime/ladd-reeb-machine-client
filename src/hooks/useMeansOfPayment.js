import React, { Fragment } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons"
import useCreatePaymentMean from "./useCreatePaymentMean"
import { useNavigation } from "@react-navigation/native"
import order from "../styles/components/order"
import { moderateScale } from "../utils/Responsive"

const useMeansOfPayment = (orderId = '', user = '', walletId = '', isAnonymous, imageSrc) => {
  const navigation = useNavigation()
  const { handleCreatePaymentMean } = useCreatePaymentMean(user, walletId)

  const meansOfPayment = (item) => {
    switch (item.type) {
      case "Credit Card":
        return (
          <Fragment>
            <TouchableOpacity
              onPress={async () => {
                const newPaymentMeanId = await handleCreatePaymentMean(
                  item.paymentTypeId
                )

                navigation.navigate("CreditCardPayment", {
                  orderId,
                  paymentTypeId: item.paymentTypeId,
                  paymentType: item.type,
                  walletId,
                  user,
                  paymentMeanId: newPaymentMeanId,
                  isAnonymous,
                  imageSrc,
                })
              }}
            >
              <View style={styles.meansPaymentSectionContainer}>
                <View style={styles.textIconContainer}>
                  <FontAwesome
                    style={styles.icon}
                    name="credit-card"
                    size={moderateScale(25)}
                    color="black"
                  />
                  <Text style={styles.typeText}>{item.type}</Text>
                </View>
                <Entypo
                  name="chevron-small-right"
                  size={moderateScale(25)}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </Fragment>
        )
      case "Bracelet":
        if (isAnonymous) return

        return (
          <Fragment>
            <TouchableOpacity
              onPress={async () => {
                const newPaymentMeanId = await handleCreatePaymentMean(
                  item.paymentTypeId
                )
                navigation.navigate("BraceletPayment", {
                  orderId,
                  paymentTypeId: item.paymentTypeId,
                  paymentType: item.type,
                  walletId,
                  user,
                  paymentMeanId: newPaymentMeanId,
                  imageSrc,
                })
              }}
            >
              <View style={styles.meansPaymentSectionContainer}>
                <View style={styles.textIconContainer}>
                  <Ionicons
                    style={styles.icon}
                    name="watch-outline"
                    size={moderateScale(25)}
                    color="black"
                  />
                  <Text style={styles.typeText}>{item.type}</Text>
                </View>
                <Entypo
                  name="chevron-small-right"
                  size={moderateScale(25)}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </Fragment>
        )
      case "QR Code":
        if (isAnonymous) return

        return (
          <Fragment>
            <TouchableOpacity
              onPress={async () => {
                const newPaymentMeanId = await handleCreatePaymentMean(
                  item.paymentTypeId
                )
                navigation.navigate("QRCodePayment", {
                  orderId,
                  paymentTypeId: item.paymentTypeId,
                  paymentType: item.type,
                  walletId,
                  user,
                  paymentMeanId: newPaymentMeanId,
                  imageSrc,
                })
              }}
            >
              <View style={styles.meansPaymentSectionContainer}>
                <View style={styles.textIconContainer}>
                  <FontAwesome
                    style={styles.icon}
                    name="qrcode"
                    size={moderateScale(25)}
                    color="black"
                  />
                  <Text style={styles.typeText}>{item.type}</Text>
                </View>
                <Entypo
                  name="chevron-small-right"
                  size={moderateScale(25)}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </Fragment>
        )
    }
  }

  return { meansOfPayment }
}

const styles = StyleSheet.create({
  meansPaymentSectionContainer: order.meansPaymentSectionContainer,
  icon: order.icon,
  textIconContainer: order.textIconContainer,
  typeText: {
    fontSize: moderateScale(16),
  },
})

export default useMeansOfPayment
