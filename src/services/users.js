import { laddReeb as http } from "./axios.js";

const GetOneUser = (userId) => {
  return http.get(`/users/${userId}`, { withCredentials: true });
};

const DeleteUser = (userId) => {
  return http.delete(`/users/${userId}`, { withCredentials: true });
};

export { GetOneUser, DeleteUser };
