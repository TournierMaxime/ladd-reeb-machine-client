import { laddReeb as http } from "./axios.js";

const SearchPaymentType = (filters) => {
  return http.post("/payment-types/search", { params: filters });
};

export { SearchPaymentType };
