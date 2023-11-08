import axios from 'axios'

const EXPO_LADD_REEB_API = process.env.EXPO_LADD_REEB_API
const EXPO_LADD_SCAN_API = process.env.EXPO_LADD_SCAN_API

const laddReeb = axios.create({
  baseURL: EXPO_LADD_REEB_API,
  withCredentials: true,
});

const laddScan = axios.create({
  baseURL: EXPO_LADD_SCAN_API
});

export { laddReeb, laddScan }