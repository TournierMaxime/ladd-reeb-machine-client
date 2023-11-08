import { useDispatch } from "react-redux"
import { deleteOrder } from "../redux/actions/orders"
import { resetCart } from "../redux/actions/addToCart"
import { useNavigation } from "@react-navigation/native"

const useDeleteOrder = (
  orderId = "",
  isAnonymous = true,
  user = "",
  imageSrc = ""
) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleDeleteOrder = async () => {
    await dispatch(deleteOrder(orderId))
    await dispatch(resetCart())

    if (isAnonymous) {
      setTimeout(() => {
        navigation.navigate("AllProducts", {
          isAnonymous,
          userId: user?.userId,
          imageSrc,
        })
      }, 200)
    } else {
      setTimeout(() => {
        navigation.navigate("AllProducts", {
          isAnonymous: false,
          userId: user?.userId,
          imageSrc,
        })
      }, 200)
    }
  }

  return {
    handleDeleteOrder,
  }
}

export default useDeleteOrder
