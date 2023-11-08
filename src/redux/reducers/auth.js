import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState = {
  isAuthenticated: false,
  data: {
    token: null,
    user: {},
  },
  error: null,
  isLoading: false,
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
      }
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case "REGISTER_USER_FAILURE":
      return {
        ...state,
        data: {},
        error: action.payload,
      }
    case "RESET_AUTH":
      return {
        error: null,
        isLoading: false
      }
    default:
      return state
  }
}

const verifyEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VERIFY_EMAIL_REQUEST":
      return {
        ...state,
        isLoading: true
      }
    case "VERIFY_EMAIL_SUCCESS":
      return {
        ...state,
        data: action.payload
      }
    case "VERIFY_EMAIL_FAILURE":
      return {
        ...state,
        data: {},
        error: action.payload,
      }
    case "RESET_AUTH":
      return {
        error: null,
        isLoading: false
      }
    default:
      return state
  }
}

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
      }
    case "LOGIN_USER_SUCCESS":
      AsyncStorage.setItem("userData", JSON.stringify(action.payload))
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true,
      }
    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        data: {},
        error: action.payload,
      }
    case "RESET_AUTH":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

const loginWithDevicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_WITH_DEVICES_REQUEST":
      return {
        ...state,
        isLoading: true,
      }
    case "LOGIN_WITH_DEVICES_SUCCESS":
      AsyncStorage.setItem("userData", JSON.stringify(action.payload))
      return {
        ...state,
        data: action.payload,
        isAuthenticated: true
      }
    case "LOGIN_WITH_DEVICES_FAILURE":
      return {
        ...state,
        data: {},
        error: action.payload,
      }
    case "RESET_AUTH":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

const logoutUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
      }
    case "LOGOUT_USER_SUCCESS":
      AsyncStorage.removeItem("userData")
      return {
        ...state,
        isAuthenticated: false,
        data: {
          token: null,
          user: {},
        },
      }
    case "LOGOUT_USER_FAILURE":
      return {
        ...state,
        data: {},
        error: action.payload,
      }
    case "RESET_AUTH":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export {
  registerReducer,
  verifyEmailReducer,
  loginUserReducer,
  loginWithDevicesReducer,
  logoutUserReducer,
}
