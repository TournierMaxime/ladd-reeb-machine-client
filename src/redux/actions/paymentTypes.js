import { SearchPaymentType } from '../../services/paymentType'

const searchPaymentType = (filters) => async (dispatch) => {
  try {
    const response = await SearchPaymentType(filters)
    dispatch({type: 'SEARCH_PAYMENT_TYPE_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'SEARCH_PAYMENT_TYPE_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

export { searchPaymentType }