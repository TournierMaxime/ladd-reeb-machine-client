import { laddReeb as http } from "./axios.js";

const LoginWithDevices = (data) => {
  return http.post("/auth/login-with-devices", data, { withCredentials: true });
};

const Logout = async () => {
  await http.post("/auth/logout", {}, { withCredentials: true });
  return {};
};

export {
  LoginWithDevices,
  Logout,
};