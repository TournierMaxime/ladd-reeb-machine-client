import { laddReeb as http } from "./axios.js"

const GetOneWallet = (userId) => {
  return http.get(`/wallets/${userId}`, { withCredentials: true });
};

const UpdateWallet = (userId, data) => {
  return http.put(`/wallets/${userId}`, data, { withCredentials: true });
};

export {
  GetOneWallet,
  UpdateWallet
}
