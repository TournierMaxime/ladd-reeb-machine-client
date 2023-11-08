import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { searchProductsReducer } from './reducers/products';
import cartReducer from './reducers/addToCart';
import { createOrderReducer, getOneOrderReducer, updateOrderReducer, deleteOrderReducer } from './reducers/orders';
import { registerReducer, verifyEmailReducer, loginUserReducer, loginWithDevicesReducer, logoutUserReducer } from './reducers/auth'
import { createOrderProductReducer, getOrderProductReducer } from './reducers/orderProducts'
import { createTransactionReducer, updateTransactionReducer } from './reducers/transactions'
import { searchPaymentTypeReducer } from './reducers/paymentTypes'
import { getOneUserReducer, deleteUserReducer } from './reducers/users'
import { getOneWalletReducer, updateWalletReducer } from './reducers/wallet'
import { sendScanReducer } from './reducers/scan'

const rootReducer = {
  register: registerReducer,
  verifyEmail: verifyEmailReducer,
  loginUser: loginUserReducer,
  loginWithDevices: loginWithDevicesReducer,
  logoutUser: logoutUserReducer,
  searchProducts: searchProductsReducer,
  cart: cartReducer,
  createOrder: createOrderReducer,
  getOneOrder: getOneOrderReducer,
  updateOrder: updateOrderReducer,
  deleteOrder: deleteOrderReducer,
  createOrderProduct: createOrderProductReducer,
  getOrderProduct: getOrderProductReducer,
  createTransaction: createTransactionReducer,
  updateTransaction: updateTransactionReducer,
  searchPaymentType: searchPaymentTypeReducer,
  getOneUser: getOneUserReducer,
  deleteUser: deleteUserReducer,
  getOneWallet: getOneWalletReducer,
  updateWallet: updateWalletReducer,
  sendScan: sendScanReducer
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});

export default store;