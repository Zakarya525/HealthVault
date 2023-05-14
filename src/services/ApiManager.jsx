import axios from "axios";

const ApiManager = axios.create({
  baseURL: "https://polyclinic-server.chainspair.com/",
  responseType: "json",
  withCredentials: true,
});

export default ApiManager;
