import React from "react";

export type ActivityType = "rest" | "work" | "hobby";

export interface Activity {
  id: string;
  title: string;
  description: string;
  hour: string;
  activityType: ActivityType;
  imageUrl: string;
  isCompleted: boolean;
}

export interface ActivitiesContextModel {
    activities: Activity[];
  addActivity: (
    title: string,
    description: string,
    hour: string,
    activityType: ActivityType
  ) => void;
  completeActivity: (activityID: string) => void;
}

const ActivityContext = React.createContext<ActivitiesContextModel>({
    activities: [],
  addActivity: () => {},
  completeActivity: () => {},
});
export default ActivityContext