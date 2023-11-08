const initialState = {
  data: {},
  loading: true,
  error: null,
}

const createOrderProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ORDER_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_ORDER_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_ORDER_PRODUCT_FAILURE":
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

const getOrderProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDER_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ORDER_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ORDER_PRODUCT_FAILURE":
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

export { createOrderProductReducer, getOrderProductReducer }
