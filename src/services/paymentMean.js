import { laddReeb as http } from "./axios.js";

const CreatePaymentMean = (data) => {
  return http.post("/payment-means/new", data, { withCredentials: true });
};

export { CreatePaymentMean };
