import React, { useState } from "react";
import ActivityContext, {
    ActivitiesContextModel,
  Activity,
  ActivityType,
} from "./activity-context";

const ActivityContextProvider: React.FC = (props) => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: Math.random().toString(),
      title: "My daily sleep",
      description: "Sleep through the night after a day of quarantine",
      hour: "23:00",
      activityType: "rest",
      imageUrl: "assets/images/rest.jpg",
      isCompleted: false,
    },
    {
      id: Math.random().toString(),
      title: "Hard work",
      description: "Work in the projects I have at Tribalyte",
      hour: "9:00",
      activityType: "work",
      imageUrl: "/assets/images/work.jpg",
      isCompleted: false,
    },
    {
      id: Math.random().toString(),
      title: "Play ping pong",
      description: "Play a ping pong match on the hall table!",
      hour: "19:00",
      activityType: "hobby",
      imageUrl: "/assets/images/hobby.jpg",
      isCompleted: false,
    },
  ]);
  const addActivity = (
    title: string,
    description: string,
    hour: string,
    activityType: ActivityType
  ) => {
    let imageUrl = "";
    switch (activityType) {
      case "rest":
        imageUrl = "assets/images/rest.jpg";
        break;
      case "hobby":
        imageUrl = "assets/images/hobby.jpg";
        break;
      case "work":
        imageUrl = "/assets/images/work.jpg";
        break;
      default:
        imageUrl = "/assets/images/hobby.jpg";
        break;
    }
    const newActivity: Activity = {
      id: Math.random().toString(),
      title,
      description,
      hour,
      activityType,
      imageUrl,
      isCompleted: false,
    };
    setActivities((curActivity) => {
      return [...curActivity, newActivity];
    });
  };
  
  const completeActivity = (activityId: string) => {
    setActivities(currActivities => {
        const updatedActivities = [...currActivities];
        const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
        const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true};
        updatedActivities[selectedActivityIndex] = updatedActivity;
        return updatedActivities;
    });
};

  const activitiesContext: ActivitiesContextModel = {
    activities,
    addActivity,
    completeActivity,
  };
  return (
    <ActivityContext.Provider value={activitiesContext}>
      {props.children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
