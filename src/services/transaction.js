import { laddReeb as http } from "./axios.js";

const CreateTransaction = (orderId, data) => {
  return http.post(`/transactions/${orderId}/new`, data);
};

const UpdateTransaction = (transactionId, data) => {
  return http.put(`/transactions/${transactionId}`, data);
};

export { CreateTransaction, UpdateTransaction };
