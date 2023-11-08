import { CreateOrder, DeleteOrder, GetOneOrder, UpdateOrder } from '../../services/order'

const createOrder = (data) => async (dispatch) => {
  try {
    const response = await CreateOrder(data)
    dispatch({type: 'CREATE_ORDER_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'CREATE_ORDER_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

const getOneOrder = (orderId) => async (dispatch) => {
  try {
    const response = await GetOneOrder(orderId)
    dispatch({type: 'GET_ONE_ORDER_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'GET_ONE_ORDER_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

const updateOrder = (orderId, data) => async (dispatch) => {
  try {
    const response = await UpdateOrder(orderId, data)
    dispatch({type: 'UPDATE_ORDER_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'UPDATE_ORDER_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

const deleteOrder = (orderId) => async (dispatch) => {
  try {
    const response = await DeleteOrder(orderId)
    dispatch({type: 'DELETE_ORDER_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'DELETE_ORDER_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

export { createOrder, getOneOrder, updateOrder, deleteOrder }