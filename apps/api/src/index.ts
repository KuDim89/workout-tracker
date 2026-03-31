import type { ApiErrorPayload } from "@repo/types";
import { apiEnv } from "./env.js";

export const defaultApiError: ApiErrorPayload = {
  code: "UNKNOWN",
  message: "Unexpected server error",
};

export const apiRuntime = {
  corsOrigin: String(apiEnv.API_CORS_ORIGIN),
  environment: String(apiEnv.API_NODE_ENV),
  port: Number(apiEnv.API_PORT),
};
