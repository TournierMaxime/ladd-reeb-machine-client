const initialState = {
  data: [],
  loading: true,
  error: null,
}

const createOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CREATE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "CREATE_ORDER_FAILURE":
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

const getOneOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_ORDER_FAILURE":
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

const updateOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "UPDATE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_ORDER_FAILURE":
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

const deleteOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_ORDER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {},
      }
    case "RESET_CART":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export {
  createOrderReducer,
  getOneOrderReducer,
  updateOrderReducer,
  deleteOrderReducer,
}
