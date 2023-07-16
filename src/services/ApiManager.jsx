import axios from "axios";

const ApiManager = axios.create({
  baseURL: " https://psychedelic-wine-production.up.railway.app/",
});

export default ApiManager;
