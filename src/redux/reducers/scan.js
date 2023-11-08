const initialState = {
  data: {},
  loading: true,
  error: null,
}

const sendScanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_SCAN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "SEND_SCAN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "SEND_SCAN_FAILURE":
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

export { sendScanReducer }
