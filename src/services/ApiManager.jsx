import axios from "axios";

const ApiManager = axios.create({
  baseURL: "http://192.168.39.53:8000/api/",
});

export default ApiManager;
