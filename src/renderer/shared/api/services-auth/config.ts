/**
 * You can modify this file
 *
 * @version 6
 */
import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

//@ts-ignore
import qs from 'qs';
import { getToken } from 'renderer/shared/utils/getToken';

const baseConfig: AxiosRequestConfig = {
  baseURL: 'https://api.garzdrav.ru:5021', // <--- Add your base url
  headers: {
    'Content-Encoding': 'UTF-8',
    Accept: 'application/json',
    'Content-Type': 'application/json-patch+json',
  },
  paramsSerializer: (param) => qs.stringify(param, { indices: false }),
};

let axiosInstance: AxiosInstance;

function getAxiosInstance(security: Security): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = Axios.create(baseConfig);

    // Response interceptor
    axiosInstance.interceptors.response.use(
      (async (response: AxiosResponse): Promise<SwaggerResponse<any>> => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        /**
         * Example on response manipulation
         *
         * @example
         *   const swaggerResponse: SwaggerResponse = {
         *     ...response,
         *   };
         *   return swaggerResponse;
         */
        return response;
      }) as any,
      (error: AxiosError<string>) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        if (error.response) {
          return Promise.reject(
            new RequestError(
              error.response.data,
              error.response.status,
              error.response
            )
          );
        }

        if (error.isAxiosError) {
          return Promise.reject(new RequestError('noInternetConnection'));
        }
        return Promise.reject(error);
      }
    );
  }

  // ًًRequest interceptor
  axiosInstance.interceptors.request.use(
    async (requestConfig) => {
      if (SecurityUrl.find((item) => item === requestConfig.url)) {
        const tokenFromLocale = await getToken();
        if (requestConfig && requestConfig.headers) {
          requestConfig.headers.Authorization = `Bearer ${tokenFromLocale}`;
        }
      }
      /* if (requestConfig && requestConfig.headers) {
        requestConfig.headers.Authorization = `Bearer ${tokenFromLocale}`;
      } */
      return requestConfig;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
const SecurityUrl = ['/api/Employee'];
class RequestError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public response?: AxiosResponse
  ) {
    super(message);
  }

  isApiException = true;

  static isRequestError(error: any): error is RequestError {
    return error.isApiException;
  }
}

export type Security = any[] | undefined;

export interface SwaggerResponse<R> extends AxiosResponse<R> {}

export { getAxiosInstance, RequestError };
