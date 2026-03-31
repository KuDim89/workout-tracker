import type { WorkoutSummary } from "@repo/types";
import { webEnv } from "./env";

export const sampleWorkout: WorkoutSummary = {
  id: "sample",
  title: "Upper Body",
  plannedMinutes: 45,
};

export const webRuntime = {
  apiBaseUrl: webEnv.WEB_API_BASE_URL,
  environment: webEnv.WEB_APP_ENV,
};
