const initialState = {
  data: {},
  loading: true,
  error: null,
}

const searchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEARCH_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        filters: {
          page: 1,
          size: 20,
          productId: undefined,
        },
      }
    case "SEARCH_PRODUCT_FAILURE":
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

export { searchProductsReducer }
