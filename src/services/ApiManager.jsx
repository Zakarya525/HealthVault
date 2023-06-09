import axios from "axios";

const ApiManager = axios.create({
  baseURL: "http://192.168.43.10:8000/api/",
});

export default ApiManager;
