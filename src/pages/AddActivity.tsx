import React, { useRef, useContext, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonMenuButton,
  IonButtons,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonInput,
  IonItem,
  IonDatetime,
  IonButton,
  IonToast,
} from "@ionic/react";
import ActivityContext, { ActivityType } from "../data/activity-context";
import { useHistory } from "react-router";

const AddActivity: React.FC = () => {
  const history = useHistory();
  const [tostMsg, setTostMsg] = useState<string>("");
  const titleInput = useRef<HTMLIonInputElement>(null);
  const descInput = useRef<HTMLIonInputElement>(null);
  const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
  const hourInput = useRef<HTMLIonDatetimeElement>(null);
  const activityCtxt = useContext(ActivityContext);

  const addActivity = () => {
    const title = titleInput.current?.value as string;
    const description = descInput.current?.value as string;
    const activityType = activityTypeInput.current?.value as ActivityType;
    const startDate = new Date(hourInput.current?.value as string);
    const startHour = startDate.getHours() + ":" + startDate.getMinutes();

    if (title && description && activityType && startHour) {
      activityCtxt.addActivity(title, description, startHour, activityType);
      setTostMsg("The activity has been added!");
      history.replace("/all-activity");
    }
  };

  return (
    <React.Fragment>
      <IonToast
        isOpen={!!tostMsg}
        message={tostMsg}
        duration={4000}
        color="medium"
        onDidDismiss={() => setTostMsg("")}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Add Activity</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonSegment ref={activityTypeInput}>
                  <IonSegmentButton value="work">
                    <IonLabel>work</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="rest">
                    <IonLabel>rest</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="hobby">
                    <IonLabel>hobby</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Activity Title</IonLabel>
                  <IonInput type="text" ref={titleInput}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Activity Description</IonLabel>
                  <IonInput type="text" ref={descInput}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Starting hour</IonLabel>
                  <IonDatetime
                    ref={hourInput}
                    displayFormat="h:mm A"
                    pickerFormat="h:mm A"
                    value={new Date().toString()}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                <IonButton expand="block" fill="outline" onClick={addActivity}>
                  Add Activity
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default AddActivity;
