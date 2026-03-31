const readRequired = (key: "WEB_APP_ENV" | "WEB_API_BASE_URL"): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export interface WebEnv {
  WEB_APP_ENV: string;
  WEB_API_BASE_URL: string;
}

export const webEnv: WebEnv = {
  WEB_APP_ENV: readRequired("WEB_APP_ENV"),
  WEB_API_BASE_URL: readRequired("WEB_API_BASE_URL"),
};
