import type { ApiErrorPayload } from "@repo/types";

export const defaultApiError: ApiErrorPayload = {
  code: "UNKNOWN",
  message: "Unexpected server error"
};
