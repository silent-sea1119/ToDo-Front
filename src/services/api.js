import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.122:8000",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Accept': 'application/json, text/plain'
  }
});

export default api;