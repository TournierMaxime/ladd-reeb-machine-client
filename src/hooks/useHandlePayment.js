import {
  createTransaction,
  updateTransaction
} from "../redux/actions/transactions"
import { updateWallet } from "../redux/actions/wallet"
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { updateOrder } from "../redux/actions/orders"
import moment from "moment"
//import { sendScan } from "../redux/actions/scan"
import { useState } from "react"
import * as Application from "expo-application"
import { Platform } from "react-native"

const useHandlePayment = (
  orderId = "",
  paymentTypeId = "",
  walletId = "",
  paymentMeanId = "",
  amount = 0,
  imageSrc,
  userId = "",
  paymentType = "",
  isAnonymous
) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const userWallet = useSelector(
    (state) => state.loginWithDevices.data.user?.Wallet
  )

  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [visible, setVisible] = useState(true)
  const [status, setStatus] = useState("pending")
  const [message, setMessage] = useState({
    success: "",
    error: "",
  })

  const getDeviceId = async (platform) => {
    let deviceId
    try {
      switch (platform) {
        case "ios":
          deviceId = await Application.getIosIdForVendorAsync()
          return deviceId
        case "android":
          deviceId = await Application.androidId
          return deviceId
      }
    } catch (error) {
      console.log(error)
    }
  }

  const mockRFIDScan = () => {
    return Math.random() < 0.9 ? "accepted" : "rejected"
  }

  /*   const scanRfid = async () => {
    const paymentStatus = mockRFIDScan()
    await dispatch(
      sendScan({
        payload: {
          paymentStatus,
        },
        meta: {
          deviceName: "R35C-2D-BOX",
          mediumType: "barcode|rfid",
        },
      })
    )
    return paymentStatus
  } */

  const handlePayment = async () => {
    setVisible(false)
    try {
      const randomStatus = await mockRFIDScan()
      setIsProcessingPayment(true)
      const macAddress = await getDeviceId(Platform.OS)
      const create = await dispatch(
        createTransaction(orderId, {
          orderId,
          paymentTypeId,
          walletId,
          paymentMeanId,
          amount,
          dataDevice: {
            type: "distributor",
            macAddress,
          },
        })
      )

      await dispatch(updateOrder(orderId, { paymentTypeId }))

      setTimeout(async () => {
        const update = await dispatch(
          updateTransaction(create.transaction.transactionId, {
            status: randomStatus,
          })
        )

        setIsProcessingPayment(false)

        if (update.transaction.status === "accepted") {
          setStatus(update.transaction.status)

          await dispatch(
            updateTransaction(create.transaction.transactionId, {
              acceptedAt: moment.now(),
            })
          )

          if (paymentType === "Bracelet") {
            if (userWallet?.credits >= amount) {
              await dispatch(
                updateWallet(userId, { credits: userWallet.credits - amount })
              )
            } else {
              setMessage({
                error:
                  "Fond insuffisant\n\nVeuillez sélectionner un autre moyen de paiement",
              })
              setTimeout(() => {
                navigation.navigate("DetailsOrder", {
                  orderId,
                  isAnonymous,
                  imageSrc,
                })
              }, 1500)
              return
            }
          }

          setMessage({ success: update.success.toString() })

          setTimeout(() => {
            navigation.navigate("SuccessFullPayment", {
              status: update.transaction.status,
              imageSrc,
              isAnonymous,
              userId,
              paymentType
            }),
              setMessage({
                success: "",
                error: "",
              })
          }, 1000)
        } else if (update.transaction.status === "rejected") {
          setStatus(update.transaction.status)

          await dispatch(
            updateTransaction(create.transaction.transactionId, {
              rejectedAt: moment.now(),
            })
          )

          setMessage({ error: update.error.toString() })

          setTimeout(() => {
            navigation.navigate("FailurePayment", {
              status: update.transaction.status,
              imageSrc,
              isAnonymous
            }),
              setMessage({
                success: "",
                error: "",
              })
          }, 1000)
        }
      }, 5000)
    } catch (error) {
      console.log(error)
      setMessage({ error: error.response.data.errMsg.toString() || "Une erreur est survenue" })
    }
    setMessage({
      success: '',
      error: ''
    })
  }

  return {
    handlePayment,
    isProcessingPayment,
    message,
    visible,
    status,
  }
}

export default useHandlePayment
