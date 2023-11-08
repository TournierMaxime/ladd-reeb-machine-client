import { laddReeb as http } from "./axios.js";

const CreateOrderProduct = (data) => {
    return http.post("/order-products/new", data);
  };
  
  const GetOrderProduct = (orderProductId) => {
    return http.get(`/order-products/${orderProductId}`);
  };

  export {
    CreateOrderProduct,
    GetOrderProduct
  }
  