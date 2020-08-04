import React, { useContext } from "react";
import {
  IonGrid,
  IonRow,
  IonContent,
  IonCol,
  IonText,
  IonButton,
} from "@ionic/react";
import ActivityContext, { Activity } from "../data/activity-context";

interface completeModalProps {
  activity: Activity;
  dismissModal: () => void;
}
const CompleteModal: React.FC<completeModalProps> = (props) => {
  const activityCtxt = useContext(ActivityContext);

  const confirmComplete = (activityId: string) => {
    activityCtxt.completeActivity(activityId);
    props.dismissModal();
  };
  return (
    <IonContent>
      <IonGrid className="ion-no-padding">
        <IonRow>
          <IonCol className="ion-no-padding">
            <img src={props.activity.imageUrl} alt="s" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonText>
              <h2>{props.activity.title}</h2>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center ion-no-padding">
            <IonText color="medium">
              <p>
                {" "}
                Are you sure you want to mark this activity as completed ?{" "}
              </p>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton color="danger" fill="clear" onClick={props.dismissModal}>
              Cancel
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center">
            <IonButton
              color="primary"
              fill="clear"
              onClick={() => confirmComplete(props.activity.id)}
            >
              Complete
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default CompleteModal;
