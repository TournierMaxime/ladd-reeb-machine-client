import { CreatePaymentMean } from '../../services/paymentMean'

const createPaymentMean = (data) => async (dispatch) => {
  try {
    const response = await CreatePaymentMean(data)
    dispatch({type: 'CREATE_PAYMENT_MEAN_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'CREATE_PAYMENT_MEAN_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

export { createPaymentMean }