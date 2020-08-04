import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { bodyOutline, newspaperOutline } from "ionicons/icons";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AllActivity from "./pages/AllActivity";
import AddActivity from "./pages/AddActivity";
import ActivityContextProvider from "./data/ActivityContextProvider";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="scheduleApp">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Schedule App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem
                routerLink="/all-activity"
                routerDirection="none"
                lines="none"
              >
                <IonIcon slot="start" icon={bodyOutline} />
                <IonLabel>All Activity</IonLabel>
              </IonItem>
              <IonItem
                routerLink="/add-activity"
                routerDirection="none"
                lines="none"
              >
                <IonIcon slot="start" icon={newspaperOutline} />
                <IonLabel>Add Activity</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <ActivityContextProvider>
        <IonRouterOutlet id="scheduleApp">
          <Switch>
            <Redirect path="/" to="/all-activity" exact />
            <Route path="/all-activity" exact>
              <AllActivity />
            </Route>
            <Route path="/add-activity" exact>
              <AddActivity />
            </Route>
          </Switch>
        </IonRouterOutlet>
      </ActivityContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
