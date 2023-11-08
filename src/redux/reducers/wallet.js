const initialState = {
  data: {},
  loading: true,
  error: null,
}

const getOneWalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_WALLET_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_WALLET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_WALLET_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      }
    default:
      return state
  }
}

const updateWalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WALLET_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_WALLET_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_WALLET_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      }
    default:
      return state
  }
}

export { getOneWalletReducer, updateWalletReducer }
