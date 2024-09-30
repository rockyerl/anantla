import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Logger } from "./logger";

const logResponse = (res: AxiosResponse) => {
  if (!res) return null;

  const { config } = res;
  const loadTime = performance.now();

  Logger(`${config?.method?.toUpperCase()} ${config.url}`, {
    responseTime: loadTime,
    status: res.status,
    statusText: res.statusText,
    message: res?.data?.message || "",
  });
};

const clientService: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API || "https://anantla.ipzmarketing.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*", // replace this with your actual origin
    "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
    "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  },
});

clientService.interceptors.request.use((config) => {
  config.headers["X-AUTH-TOKEN"] = process.env.TOKEN ?? 'JaTX1Fjo_b4UFiqFLzduriCro_EE3eg1KnvK477E';
  return config;
});

clientService.interceptors.response.use((res) => {
  if (process.env.NODE_ENV !== "production") logResponse(res);
  return res;
});

export const clientGet = (url: string, config?: any) =>
  clientService.get(url, config);

export const clientPost = (url: string, body: unknown) =>
  clientService.post(url, body);

export const clientPut = (url: string, body: unknown) =>
  clientService.put(url, body);

export const clientDel = (url: string) => clientService.delete(url);

export const clientDownload = (url: string) =>
  clientService.get(url, { responseType: "blob" });

export const clientPostMultiPartForm = (url: string, body: unknown) =>
  clientService.post(url, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const clientPutMultiPartForm = (url: string, body: unknown) =>
  clientService.put(url, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });