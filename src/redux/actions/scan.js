import { SendScan } from '../../services/scan'

const sendScan = (data) => async (dispatch) => {
  try {
    const response = await SendScan(data)
    dispatch({type: 'SEND_SCAN_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'SEND_SCAN_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};


export { sendScan }