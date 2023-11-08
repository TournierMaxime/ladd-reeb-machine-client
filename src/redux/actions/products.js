import { SearchProducts } from '../../services/product'

const searchProducts = (filters) => async (dispatch) => {
  try {
    const response = await SearchProducts(filters)
    dispatch({type: 'SEARCH_PRODUCT_SUCCESS', payload: response.data});
    return response.data
  } catch (error) {
    dispatch({type: 'SEARCH_PRODUCT_FAILURE', payload: error.message});
    console.log(error)
    throw error
  }
};

export { searchProducts }