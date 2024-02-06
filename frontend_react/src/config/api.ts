import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { mergeRight, path, pathOr, prop } from "ramda";
import _, { merge } from "lodash";
import queryString from "query-string";

axios.defaults.withCredentials = false;
axios.defaults.timeout = Infinity;
interface AxiosParams {
  baseUrl: string;
  headers: any;
  method: string;
}
const config: AxiosParams = {
  baseUrl: "https://jsonplaceholder.typicode.com/",
  headers: {
    Authorization: "",
  },
  method: "post",
};

export interface RequestConfig extends AxiosRequestConfig {
  contentType?: string;
  endPoint?: string;
  ignoreQueryParams?: boolean;
  removeDefaultPostData?: boolean;
  sessionToken?: string;
  url?: string;
}

type Header = {
  Authorization?: string;
  ["Content-Type"]: string;
};

export type HTTPService = {
  deleteRequest: <T>(options: Partial<RequestConfig>) => Promise<T>;
  get: <T>(options: Partial<RequestConfig>) => Promise<T>;
  patch: <T>(options: Partial<RequestConfig>) => Promise<T>;
  post: <T>(options: Partial<RequestConfig>) => Promise<T>;
  put: <T>(options: Partial<RequestConfig>) => Promise<T>;
};

const instance: AxiosInstance = axios.create(config);

export default ({ apiKey }: { apiKey: string }): HTTPService => {
  const encodeData = (
    data: any,
    contentType: string,
    removeDefaultPostData?: boolean
  ) => {
    const defaultData = {
      api_code: apiKey,
      ct: Date.now(),
    };
    const allData = removeDefaultPostData ? data : merge(defaultData, data);

    if (contentType === "application/x-www-form-urlencoded") {
      return queryString.stringify(allData);
    }
    return allData;
  };
  const request = <T>({
    cancelToken,
    contentType = "application/x-www-form-urlencoded",
    data,
    endPoint,
    headers,
    method,
    removeDefaultPostData,
    sessionToken,
    url,
    ...options
  }: RequestConfig): Promise<T> => {
    return axios
      .request<T>({
        cancelToken,
        data: encodeData(data, contentType, removeDefaultPostData),
        headers: mergeRight(
          getHeaders(contentType, sessionToken, url),
          headers
        ),
        method,
        url: `${url}${endPoint}`,
        ...options,
      })
      .catch((error) => {
        const errorData = pathOr({}, ["response", "data"], error);
        const status = path(["response", "status"], error);

        if (typeof errorData === "string") throw errorData;
        if (typeof status === "number") throw _.merge(errorData, { status });

        return Promise.reject(error);
      })
      .then(prop("data"));
  };

  const get = <T>({
    data,
    endPoint,
    ignoreQueryParams,
    ...options
  }: Partial<RequestConfig>) =>
    request<T>({
      ...options,
      endPoint: ignoreQueryParams
        ? endPoint
        : `${endPoint}?${encodeData(
            data,
            "application/x-www-form-urlencoded"
          )}`,
      method: "GET",
    });
  const deleteRequest = <T>(options: Partial<RequestConfig>) =>
    request<T>({ method: "DELETE", ...options });
  const post = <T>(options: Partial<RequestConfig>) =>
    request<T>({ method: "POST", ...options });
  const put = <T>(options: Partial<RequestConfig>) =>
    request<T>({ method: "PUT", ...options });
  const patch = <T>(options: Partial<RequestConfig>) =>
    request<T>({ method: "PATCH", ...options });

  return {
    deleteRequest,
    get,
    patch,
    post,
    put,
  };
};
