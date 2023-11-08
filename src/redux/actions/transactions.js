import {
  CreateTransaction,
  UpdateTransaction,
} from "../../services/transaction"

const createTransaction = (orderId, data) => async (dispatch) => {
  try {
    const response = await CreateTransaction(orderId, data)
    dispatch({ type: "CREATE_TRANSACTION_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "CREATE_TRANSACTION_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const updateTransaction = (transactionId, data) => async (dispatch) => {
  try {
    const response = await UpdateTransaction(transactionId, data)
    dispatch({ type: "UPDATE_TRANSACTION_SUCCESS", payload: response.data })
    return response.data
  } catch (error) {
    dispatch({ type: "UPDATE_TRANSACTION_FAILURE", payload: error.message })
    console.log(error)
    throw error
  }
}

const resetTransaction = () => ({
  type: "RESET_TRANSACTION",
})

export { createTransaction, updateTransaction, resetTransaction }
