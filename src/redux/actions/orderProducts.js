import { CreateOrderProduct, GetOrderProduct } from '../../services/orderProduct'

const createOrderProduct = (data) => async (dispatch) => {
  try {
    const response = await CreateOrderProduct(data)
    dispatch({type: 'CREATE_ORDER_PRODUCT_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'CREATE_ORDER_PRODUCT_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

const getOrderProduct = (orderId) => async (dispatch) => {
  try {
    const response = await GetOrderProduct(orderId)
    dispatch({type: 'GET_ORDER_PRODUCT_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'GET_ORDER_PRODUCT_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

export { createOrderProduct, getOrderProduct }