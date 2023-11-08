import { laddScan as http } from "./axios.js"

const SendScan = (data) => {
  return http.post("/send-scan", data);
};

export { SendScan };
