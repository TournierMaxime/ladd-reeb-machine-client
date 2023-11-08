import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState, Fragment } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ImageBackground,
} from "react-native"
import order from "../../styles/components/order"
import button from "../../styles/components/button"
import { getOneOrder } from "../../redux/actions/orders"
import { searchPaymentType } from "../../redux/actions/paymentTypes"
import PaymentType from "../../utils/PaymentType"
import { moderateScale } from "../../utils/Responsive"
import home from "../../styles/pages/home"

const DetailsOrder = ({ route }) => {
  const dispatch = useDispatch()
  const { orderId, isAnonymous, imageSrc } = route.params

  const order = useSelector((state) => state.getOneOrder.data.order)
  const orderProduct = useSelector((state) => state.getOneOrder.data.order?.OrderProducts)
  const user = useSelector((state) => state.getOneOrder.data.order?.User)
  const wallet = useSelector((state) => state.getOneOrder.data.order?.User?.Wallet)
  const paymentTypes = useSelector((state) => state.searchPaymentType.data.paymentTypes)
  
  const [visible, setVisible] = useState(false)

  const handlePaymentMeans = () => {
    setVisible(true)
  }

  const orderDetail = (rowData) => {
    const detail = Object.values(rowData.data)
    const data = detail.map((obj) => {
      return {
        title: obj.title,
        quantity: obj.quantity,
        price: obj.price * obj.quantity,
        size: obj.size,
        image: obj.image,
      }
    })
    return data
  }

  useEffect(() => {
    dispatch(getOneOrder(orderId))
    dispatch(searchPaymentType(paymentTypes))
  }, [dispatch, orderId])

  return (
    <Fragment>
      <ImageBackground
        source={imageSrc}
        style={[styles.image, { position: "absolute" }]}
      />
      <View style={styles.mainScrollView}>
        <FlatList
          data={orderProduct}
          keyExtractor={(item) => item.orderId}
          renderItem={({ item }) => {
            return (
              <View style={styles.mainOrderViewContainer}>
                <Text style={styles.orderRef}>
                  N° de commande: {order.orderReference}
                </Text>
                {orderDetail(item).map((detailItem, index) => (
                  <View style={styles.orderContainer} key={index}>
                    <Image
                      source={{ uri: detailItem.image }}
                      style={styles.imageProduct}
                    />
                    <View style={styles.orderInfo}>
                      <Text style={styles.textInfo}>
                        Produit: {detailItem.title}
                      </Text>
                      <Text style={styles.textInfo}>
                        Quantité: {detailItem.quantity}
                      </Text>
                      <Text style={styles.textInfo}>
                        Montant: {detailItem.price + "€"}
                      </Text>
                      <Text style={styles.textInfo}>
                        Taille: {detailItem.size + " cl"}
                      </Text>
                    </View>
                  </View>
                ))}

                {visible ? (
                  <PaymentType
                    orderId={orderId}
                    paymentTypes={paymentTypes}
                    user={user}
                    walletId={wallet?.walletId}
                    isAnonymous={isAnonymous}
                    imageSrc={imageSrc}
                  />
                ) : (
                  <Pressable onPress={() => handlePaymentMeans()}>
                    <Text style={styles.payBtn}>Valider</Text>
                  </Pressable>
                )}
              </View>
            )
          }}
        />
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  mainScrollView: order.mainScrollView,
  mainOrderViewContainer: order.mainOrderViewContainer,
  orderContainer: order.orderContainer,
  orderTitle: order.orderTitle,
  orderInfo: order.orderInfo,
  textInfo: order.textInfo,
  buttonIncDec: order.buttonIncDec,
  svgButtonIncDec: order.svgButtonIncDec,
  orderButton: button.orderButton,
  buttonText: button.buttonText,
  orderRef: order.orderRef,
  orderStatus: order.orderStatus,
  payBtn: button.payBtn,
  meansPayment: order.meansPayment,
  meansPaymentSectionContainer: order.meansPaymentSectionContainer,
  icon: order.icon,
  textIconContainer: order.textIconContainer,
  imageProduct: {
    display: "flex",
    width: "60%",
    height: moderateScale(100),
    resizeMode: "contain",
  },
  image: home.image,
})

export default DetailsOrder
