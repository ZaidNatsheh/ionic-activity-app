import React, { useContext, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonButton,
  IonModal,
  IonIcon,
} from "@ionic/react";
import ActivityContext, { Activity } from "../data/activity-context";
import CompleteModal from "../components/CompleteModal";
import { checkmarkOutline } from "ionicons/icons";
//import classes from "./activityStyle";

const AllActivity: React.FC = () => {
  const [activityToComplete, setActivityToComplete] = useState<Activity>();
  const activityCtxt = useContext(ActivityContext);
  const openCompleteModal = (activity: Activity) => {
    setActivityToComplete(activity);
  };
  const closeModal = () => {
    setActivityToComplete(undefined);
  };
  return (
    <React.Fragment>
      <IonModal isOpen={!!activityToComplete} swipeToClose={true}>
        <CompleteModal
          activity={activityToComplete as Activity}
          dismissModal={closeModal}
        />
      </IonModal>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>All Activity</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {activityCtxt.activities.map((activity) => (
              <IonRow key={activity.id}>
                <IonCol className="ion-text-center">
                  <IonCard>
                    <img src={activity.imageUrl} alt="activity" />
                    <IonCardHeader>
                      <IonCardTitle>{activity.hour}</IonCardTitle>
                      <IonCardSubtitle>{activity.title}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>{activity.description}</p>
                      <IonItem lines="none">
                        {!activity.isCompleted ? (
                          <IonButton
                            className="FullWidth"
                            fill="clear"
                            onClick={() => openCompleteModal(activity)}
                          >
                            Complete Activity
                          </IonButton>
                        ) : (
                          <IonIcon color="success" className="FullWidth" icon={checkmarkOutline} />
                        )}
                      </IonItem>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default AllActivity;
