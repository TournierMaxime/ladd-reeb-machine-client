import { GetOneUser, DeleteUser } from '../../services/users'

const getOneUser = (userId) => async (dispatch) => {
  try {
    const response = await GetOneUser(userId)
    dispatch({type: 'GET_ONE_USER_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'GET_ONE_USER_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

const deleteUser = (userId) => async (dispatch) => {
  try {
    const response = await DeleteUser(userId)
    dispatch({type: 'DELETE_USER_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'DELETE_USER_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

export { getOneUser, deleteUser }