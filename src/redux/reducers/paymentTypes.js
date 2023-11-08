const initialState = {
  data: {},
  loading: true,
  error: null,
}

const searchPaymentTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PAYMENT_TYPE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_PAYMENT_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        filters: {
          page: 1,
          size: 20,
          paymentTypeId: undefined,
          type: undefined,
        },
      }
    case "SEARCH_PAYMENT_TYPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
        filters: {},
      }
    default:
      return state
  }
}

export { searchPaymentTypeReducer }
