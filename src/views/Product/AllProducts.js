import { useDispatch, useSelector } from "react-redux"
import { searchProducts } from "../../redux/actions/products"
import React, { useEffect, Fragment } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import card from "../../styles/components/card"
import button from "../../styles/components/button"
import { moderateScale } from "../../utils/Responsive"
import home from "../../styles/pages/home"
import useCreateOrder from "../../hooks/useCreateOrder"
import useItemQuantityUpdater from "../../hooks/useItemQuantityUpdater"
import { IncBtn, DecBtn } from "../../utils/SVG"

const AllProducts = ({ route }) => {
  const { isAnonymous, userId, imageSrc } = route.params
  const dispatch = useDispatch()

  const products = useSelector((state) => state.searchProducts.data.products)
  const items = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  const { handleIncrementItem, handleDecrementItem } = useItemQuantityUpdater()
  const { handleCreateOrder } = useCreateOrder(
    isAnonymous,
    userId,
    imageSrc,
    items,
    totalPrice
  )

  useEffect(() => {
    dispatch(searchProducts())
  }, [dispatch])

  return (
    <Fragment>
      <ImageBackground
        source={imageSrc}
        style={[styles.image, { position: "absolute" }]}
      />
      <View style={styles.mainScrollView}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.productId}
          renderItem={({ item }) => {
            const selectedItem = items[item.productId] || { quantity: 0 }
            return (
              <View style={styles.cardContainer}>
                <View style={{flexDirection: 'row', width: '30%'}}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.imageProduct}
                  />
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.title}>{item.title} <Text style={styles.size}>({item.size}cl)</Text></Text>
                  <Text style={styles.price}>{item.price}€</Text>
                </View>
                <View style={styles.buttonIncDec}>
                  <TouchableOpacity
                    onPress={() =>
                      handleDecrementItem({
                        ...item,
                        productId: item.productId,
                      })
                    }
                  >
                    <DecBtn
                      width={moderateScale(28)}
                      height={moderateScale(28)}
                    />
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{selectedItem.quantity}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      handleIncrementItem({
                        ...item,
                        productId: item.productId,
                      })
                    }
                  >
                    <IncBtn
                      width={moderateScale(28)}
                      height={moderateScale(28)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      </View>
      {totalPrice === 0 ? null : (
        <View style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
          <TouchableOpacity onPress={async () => await handleCreateOrder()}>
            <Text style={[styles.accountBtn, { backgroundColor: "#009DDC" }]}>
              Commander {totalPrice ? totalPrice + "€" : null}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Fragment>
  )
}

const styles = StyleSheet.create({
  mainScrollView: card.mainScrollView,
  cardContainer: card.cardContainer,
  cardTitle: card.cardTitle,
  cardInfo: card.cardInfo,
  title: card.title,
  size: card.size,
  quantity: card.quantity,
  price: card.price,
  buttonIncDec: card.buttonIncDec,
  svgButtonIncDec: card.svgButtonIncDec,
  orderButton: button.orderButton,
  accountBtn: button.accountBtn,
  imageProduct: {
    width: "100%",
    height: moderateScale(100),
    resizeMode: "contain",
  },
  image: home.image,
  headerList: {
    backgroundColor: "#FFF",
    borderRadius: moderateScale(5),
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: moderateScale(15),
    padding: moderateScale(15),
  },
})

export default AllProducts
