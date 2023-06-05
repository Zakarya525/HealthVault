import axios from "axios";

const ApiManager = axios.create({
  baseURL: "http://192.168.10.4:8000/api/auth/",
});

export default ApiManager;
