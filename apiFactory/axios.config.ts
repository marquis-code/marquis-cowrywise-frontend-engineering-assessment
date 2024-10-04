import axios, { AxiosResponse } from "axios";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const $GATEWAY_ENDPOINT = import.meta.env.VITE_BASE_URL;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export const GATEWAY_ENDPOINT = axios.create({
  baseURL: $GATEWAY_ENDPOINT,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});


export interface CustomAxiosResponse extends AxiosResponse {
  value?: any;
  type?: string;
}

const instanceArray = [
  GATEWAY_ENDPOINT
];

instanceArray.forEach((instance) => {
  instance.interceptors.request.use((config: any) => {
    return config;
  });

  instance.interceptors.response.use(
    (response: CustomAxiosResponse) => {
      return response;
    },
    (err: any) => {
      if (typeof err.response === "undefined") {
        showToast({
          title: "Error",
          message: "kindly check your network connection",
          toastType: "error",
          duration: 3000
        });
        return {
          type: "ERROR",
          ...err.response,
        };
      }
      if (err.response.status === 401) {
        showToast({
          title: "Error",
          message: err.response.data.errors[0],
          toastType: "error",
          duration: 3000
        });
        return {
          type: "ERROR",
          ...err.response,
        };
      } else if (statusCodeStartsWith(err.response.status, 4)) {
        console.log(err.response, 'error from axios config')
        if (err.response.data.message) {
          showToast({
            title: "Error",
            message: err.response.data.message,
            toastType: "error",
            duration: 3000
          });
        }
        return {
          type: "ERROR",
          ...err.response,
        };
      } else if (err.response.status === 500) {
        showToast({
          title: "Error",
          message: err?.response?.data?.message || err?.response?.data?.error || "An error occured",
          toastType: "error",
          duration: 3000
        });
        return {
          type: "ERROR",
          ...err.response,
        };
      } else if (err.response.status === 409) {
        showToast({
          title: "Error",
          message: err?.response?.data?.message || err?.response?.data?.error || "An error occured",
          toastType: "error",
          duration: 3000
        });
        
      }
    }
  );
});

const statusCodeStartsWith = (
  statusCode: number,
  startNumber: number
): boolean => {
  const statusCodeString = statusCode.toString();
  const startNumberString = startNumber.toString();

  return statusCodeString.startsWith(startNumberString);
};
