import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use(
  (config) => {
    console.log("Request Sent: ", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response Received: ", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
