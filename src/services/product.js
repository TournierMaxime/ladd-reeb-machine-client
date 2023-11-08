import { laddReeb as http } from "./axios.js";

const CreateProduct = (data) => {
  return http.post("/products/new", data);
};

const SearchProducts = (filters) => {
  return http.post("/products/search", {}, { params: filters });
};

const GetOneProduct = (productId) => {
  return http.get(`/products/${productId}`);
};

const UpdateProduct = (data, productId) => {
  return http.put(`/products/product/${productId}`, data);
};

const DeleteProduct = (productId) => {
  return http.delete(`/products/product/${productId}`);
};

export { CreateProduct, SearchProducts, GetOneProduct, UpdateProduct, DeleteProduct };
