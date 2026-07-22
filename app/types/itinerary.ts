export interface Activity {
  timeOfDay: string;
  title: string;
  description: string;
  locationName: string;
  estimatedCostUsd: number;
  tags: string[];
}

export interface DayPlan {
  dayNumber: number;
  theme: string;
  activities: Activity[];
}

export interface Itinerary {
  destination: string;
  durationDays: number;
  overallSummary: string;
  estimatedTotalBudget: number;
  days: DayPlan[];
  localEtiquetteTips: string[];
  recommendedPackingItems: string[];
}
