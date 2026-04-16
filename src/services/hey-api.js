// import { CreateClientConfig } from "@hey-api/client-next";
import { axiosInstance } from "../../utils/request";

/**
 * @param {import('./fastapi/client/client.gen').CreateClientConfig} config
 * @returns {import('./fastapi/client/client.gen').ClientOptions}
 */
export const createClientConfig = (config) => ({
  ...config,
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  axios: axiosInstance,
});
