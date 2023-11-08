import {
  Login,
  LoginWithDevices,
  Logout,
  Register,
  VerifyEmail,
} from "../../services/auth"

const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_USER_REQUEST" })
    const response = await Login(data)
    dispatch({
      type: "LOGIN_USER_SUCCESS",
      payload: response.data,
    })
    return response.data
  } catch (error) {
    dispatch({
      type: "LOGIN_USER_FAILURE",
      payload: error.response.data.errMsg,
    })
    throw error
  }
}

const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_USER_REQUEST" })
    const response = await Register(data)
    dispatch({
      type: "REGISTER_USER_SUCCESS",
      payload: response.data,
    })
    return response.data
  } catch (error) {
    dispatch({
      type: "REGISTER_USER_FAILURE",
      payload: error.response.data.errMsg,
    })
    throw error
  }
}

const verifyEmail = (data, userId) => async (dispatch) => {
  try {
    dispatch({ type: "VERIFY_EMAIL_REQUEST" })
    const response = await VerifyEmail(data, userId)
    dispatch({
      type: "VERIFY_EMAIL_SUCCESS",
      payload: response.data,
    })
    return response.data
  } catch (error) {
    dispatch({
      type: "VERIFY_EMAIL_FAILURE",
      payload: error.response.data.errMsg,
    })
    throw error
  }
}

const loginWithDevices = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_WITH_DEVICES_REQUEST" })
    const response = await LoginWithDevices(data)
    dispatch({
      type: "LOGIN_WITH_DEVICES_SUCCESS",
      payload: response.data,
    })
    return response.data
  } catch (error) {
    dispatch({
      type: "LOGIN_WITH_DEVICES_FAILURE",
      payload: error.response.data.errMsg,
    })
    throw error
  }
}

const logoutUser = () => (dispatch) => {
  try {
    dispatch({ type: "LOGOUT_USER_REQUEST" })
    const response = Logout()
    dispatch({
      type: "LOGOUT_USER_SUCCESS",
      payload: response.data,
    })
    return response.data
  } catch (error) {
    dispatch({
      type: "LOGOUT_USER_FAILURE",
      payload: error.response.data.errMsg,
    })
    throw error
  }
}

  const resetAuth = () => ({
  type: "RESET_AUTH",
});

export { loginUser, logoutUser, loginWithDevices, register, verifyEmail, resetAuth }
