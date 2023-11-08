const initialState = {
  data: {},
  loading: true,
  error: null,
}

const createPaymentMeanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PAYMENT_MEAN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_PAYMENT_MEAN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_PAYMENT_MEAN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

export { createPaymentMeanReducer }