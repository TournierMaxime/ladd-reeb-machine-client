import { createPaymentMean } from "../redux/actions/paymentMean"
import { useDispatch } from "react-redux"

const useCreatePaymentMean = (user = '', walletId = '') => {
  const dispatch = useDispatch()

  const handleCreatePaymentMean = async (paymentTypeId) => {
    const response = await dispatch(
      createPaymentMean({
        userId: user?.userId,
        paymentTypeId,
        walletId,
        deleted: false,
        isDefault: false,
      })
    )
    return response.paymentMean.paymentMeanId
  }

  return {
    handleCreatePaymentMean,
  }
}

export default useCreatePaymentMean
