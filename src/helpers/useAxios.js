import { makeUseAxios } from "axios-hooks";
import AxiosInstance from "./axiosInstance";

const useAxios = makeUseAxios({
  axios: AxiosInstance,
  cache: false,
  defaultOptions: {
    manual: true,
  },
});

export default useAxios;
