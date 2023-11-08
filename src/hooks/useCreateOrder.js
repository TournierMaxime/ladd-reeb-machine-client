import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import { createOrder } from "../redux/actions/orders"

const useCreateOrder = (isAnonymous, userId = '', imageSrc = '', items = [], totalPrice = 0) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

      const handleCreateOrder = async () => {
    if (isAnonymous) {
      if (userId) {
        const create = await dispatch(createOrder({ items: [items], amount: totalPrice, userId }))
        const orderId = create.order.orderId

        return navigation.navigate("DetailsOrder", {
          orderId,
          isAnonymous,
          userId: userId,
          imageSrc
        })

      } else {
        const create = await dispatch(createOrder({ items: [items], amount: totalPrice }))
        const orderId = create.order.orderId

        return navigation.navigate("DetailsOrder", {
          orderId,
          isAnonymous,
          imageSrc
        })
      }
    }

    const create = await dispatch(
      createOrder({ items: [items], amount: totalPrice, userId })
    )
    const orderId = create.order.orderId
    return navigation.navigate("DetailsOrder", { orderId, imageSrc })
      }
    
    return {
        handleCreateOrder
    }

}

export default useCreateOrder