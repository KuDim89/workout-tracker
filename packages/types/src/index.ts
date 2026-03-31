export interface WorkoutSummary {
  id: string;
  title: string;
  plannedMinutes: number;
}

export interface ApiErrorPayload {
  code: string;
  message: string;
}
