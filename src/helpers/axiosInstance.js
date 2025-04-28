import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_HOST,
  timeout: 30000,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken) return config;

    const parsedToken = JSON.parse(userToken);
    const accessToken = parsedToken?.token;
    if (accessToken) {
      config.headers = config.headers || {};
      config.headers["x-auth-token"] = accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    const result = {
      statusText: "success",
      status: response.status,
      data: response.data,
    };

    return { ...response, ...result };
  },
  (error) => {
    const result = {
      statusText: "error",
      status: error.response?.status || 500,
      data: error.response?.data,
    };

    return Promise.reject(result);
  }
);

export default AxiosInstance;
