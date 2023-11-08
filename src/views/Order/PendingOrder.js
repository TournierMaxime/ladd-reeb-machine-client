import React, { useState, useEffect, Fragment } from "react"
import { Text, StyleSheet, View, ImageBackground } from "react-native"
import * as Progress from "react-native-progress"
import pendingOrder from "../../styles/pages/pendingOrder"
import { useNavigation } from "@react-navigation/native"
import { moderateScale } from "../../utils/Responsive"
import { useDispatch } from "react-redux"
import { resetCart } from "../../redux/actions/addToCart"
import home from "../../styles/pages/home"
import { logoutUser } from '../../redux/actions/auth'

const PendingOrder = ({ route }) => {
  const { imageSrc, isAnonymous } = route.params
  const dispatch = useDispatch()

  const [progress, setProgress] = useState(0)
  const [isProgressCompleted, setIsProgressCompleted] = useState(false)
  const navigation = useNavigation()

  const interval = () => {
    setInterval(() => {
      setProgress((progress) => {
        if (progress >= 1) {
          clearInterval(interval)
          setIsProgressCompleted(true)
          return progress
        }
        return progress + 0.1
      })
    }, 500)
  }

  const timeout = () => {
    setTimeout(async () => {
      navigation.navigate("Home")
      if (isAnonymous === true) {
        await logoutUser()
        await dispatch(resetCart())
      }
      await dispatch(resetCart())
    }, 3000)
  }

  useEffect(() => {
    setIsProgressCompleted(false)
    interval()

    return () => clearInterval(interval())
  }, [])

  useEffect(() => {
    if (isProgressCompleted) {
      timeout()
      return () => clearTimeout(timeout())
    }
  }, [isProgressCompleted, navigation])

  return (
    <Fragment>
      <ImageBackground
        source={imageSrc}
        style={[styles.image, { position: "absolute" }]}
      />
      <View style={styles.pendingOrderViewContainer}>
        <View style={styles.pendingOrderCardContainer}>
          {isProgressCompleted ? (
            <View style={styles.pendingOrderContainer}>
              <Text style={styles.pendingOrder}>
                Vous pouvez récupérer votre commande
              </Text>
            </View>
          ) : (
            <Fragment>
              <View style={styles.pendingOrderContainer}>
                <Text style={styles.pendingOrder}>
                  Votre commande est en cours de péparation
                </Text>
              </View>
              <View style={styles.progressBarViewContainer}>
                <Progress.Bar
                  progress={progress}
                  borderRadius={moderateScale(40)}
                  borderWidth={moderateScale(0)}
                  unfilledColor="#009DDC"
                  color="#A5008C"
                  width={moderateScale(200)}
                  useNativeDriver={true}
                />
              </View>
            </Fragment>
          )}
        </View>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  pendingOrderViewContainer: pendingOrder.pendingOrderViewContainer,
  pendingOrderCardContainer: pendingOrder.pendingOrderCardContainer,
  pendingOrderTextInstructions: pendingOrder.pendingOrderTextInstructions,
  pendingOrder: pendingOrder.pendingOrder,
  pendingOrderContainer: pendingOrder.pendingOrderContainer,
  title: pendingOrder.title,
  subTitle: pendingOrder.subTitle,
  progressBarViewContainer: pendingOrder.progressBarViewContainer,
  image: home.image,
})

export default PendingOrder
