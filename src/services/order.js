import { laddReeb as http } from "./axios.js";

const CreateOrder = (data) => {
  return http.post("/orders/new", data);
};

const GetOneOrder = (orderId) => {
  return http.get(`/orders/${orderId}`);
};

const UpdateOrder = (orderId, data) => {
  return http.put(`/orders/${orderId}`, data);
};

const DeleteOrder = (orderId) => {
  return http.delete(`/orders/${orderId}`);
};

export { CreateOrder, GetOneOrder, UpdateOrder, DeleteOrder };
