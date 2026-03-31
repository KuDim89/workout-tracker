const parsePort = (value: string | undefined): number => {
  if (!value) {
    return 3000;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error("API_PORT must be a positive integer.");
  }
  return parsed;
};

const readRequired = (key: "API_CORS_ORIGIN"): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export interface ApiEnv {
  API_NODE_ENV: string;
  API_PORT: number;
  API_CORS_ORIGIN: string;
}

export const apiEnv: ApiEnv = {
  API_NODE_ENV: process.env.API_NODE_ENV ?? "development",
  API_PORT: parsePort(process.env.API_PORT),
  API_CORS_ORIGIN: readRequired("API_CORS_ORIGIN"),
};
