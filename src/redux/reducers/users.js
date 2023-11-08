const initialState = {
  data: {},
  loading: true,
  error: null,
}

const getOneUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "GET_ONE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "GET_ONE_USER_FAILURE":
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

const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "DELETE_USER_FAILURE":
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

export { getOneUserReducer, deleteUserReducer }
