import axios from "axios";
import {getToken} from "@/api/storage";

const instance = axios.create({
  baseURL: "https://task-react-auth-backend.eapi.joincoded.com/api",
});

instance.interceptors.request.use(async (config) => {
  //1.get token
  const token = await getToken();
  //2.token ? req + token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  //3.return request
  return config;
});

export default instance;
