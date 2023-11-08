import { GetOneWallet, UpdateWallet } from '../../services/wallet'

const getOneWallet = (userId) => async (dispatch) => {
  try {
    const response = await GetOneWallet(userId)
    dispatch({type: 'GET_ONE_WALLET_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'GET_ONE_WALLET_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

const updateWallet = (userId, data) => async (dispatch) => {
  try {
    const response = await UpdateWallet(userId, data)
    dispatch({type: 'UPDATE_WALLET_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'UPDATE_WALLET_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

export { getOneWallet, updateWallet }