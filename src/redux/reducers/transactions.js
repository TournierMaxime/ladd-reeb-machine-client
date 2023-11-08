const initialState = {
  data: {},
  loading: true,
  error: null,
}

const createTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TRANSACTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_TRANSACTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_TRANSACTION_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    case "RESET_TRANSACTION":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

const updateTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TRANSACTION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_TRANSACTION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_TRANSACTION_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      }
    case "RESET_TRANSACTION":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export { createTransactionReducer, updateTransactionReducer }
