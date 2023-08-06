//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import type { AxiosRequestConfig } from "axios";
import type { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
//@ts-ignore
import qs from "qs";
import type {
  AuthRequestAuthentication,
  AuthRequestRefresh,
  AuthResponseEmployeeInformation,
  CoreResponseAuthentication,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToUrlencoded(requestBody: object) {
  return qs.stringify(requestBody);
}

/**
 *
 * Возвращает информацию о сотруднике
 */
export const getEmployee = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<AuthResponseEmployeeInformation>> => {
  return Http.getRequest(
    getEmployee.key,
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getEmployee.key = "/api/Employee";

/**
 *
 * Возвращает access token и refresh token
 */
export const postAuthentication = (
  requestBody: AuthRequestAuthentication,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<CoreResponseAuthentication>> => {
  return Http.postRequest(
    postAuthentication.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAuthentication.key = "/api/Authentication";

/**
 *
 * Обновляется токен
 */
export const postAuthenticationRefresh = (
  requestBody: AuthRequestRefresh,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<CoreResponseAuthentication>> => {
  return Http.postRequest(
    postAuthenticationRefresh.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAuthenticationRefresh.key = "/api/Authentication/refresh";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT1 = [{ oauth2: [] }];
