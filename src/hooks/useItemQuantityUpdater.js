import { incrementItem, decrementItem } from "../redux/actions/addToCart"
import { useDispatch } from "react-redux"

const useItemQuantityUpdater = () => {
    const dispatch = useDispatch()
    
  const handleIncrementItem = (item) => {
    dispatch(incrementItem(item.productId, item))
  }

  const handleDecrementItem = (item) => {
    dispatch(decrementItem(item.productId, item))
  }

  return {
    handleIncrementItem,
    handleDecrementItem,
  }
}

export default useItemQuantityUpdater
