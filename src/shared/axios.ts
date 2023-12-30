import axios from "axios";
import { API_URL } from "./constants";

console.log(process.env.REACT_APP_API_KEY);

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: "2bc6532dc6e0b7a7b61647694e233271",
  },
});

export default instance;
