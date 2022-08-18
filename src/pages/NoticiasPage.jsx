import { IonContent, IonPage, IonRow, IonCol, IonGrid } from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";

import { Header } from "../components/Header";
import { Refresher } from "../components/Refresher";

export const NoticiasPage = () => {
  return (
    <>
      <IonPage>
        <Header title="Noticias" />
        <IonContent>
          <Refresher />
          <IonRow style={{ justifyContent: 'center'}}>
            <div className="img-ultravel">

              <ion-card>
                <img src="https://images.unsplash.com/photo-1657641623779-8963a4fdc619?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <ion-card-header>
                  <ion-card-subtitle>Destination</ion-card-subtitle>
                  <ion-card-title>Madison, WI</ion-card-title>
                </ion-card-header>
                <ion-card-content>Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.</ion-card-content>
              </ion-card>
            </div>
            <div className="img-ultravel">

              <ion-card>
                <img src="https://images.unsplash.com/photo-1657385130763-089c931dfac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <ion-card-header>
                  <ion-card-subtitle>Destination</ion-card-subtitle>
                  <ion-card-title>Madison, WI</ion-card-title>
                </ion-card-header>
                <ion-card-content>Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.</ion-card-content>
              </ion-card>

            </div>
          </IonRow>
        </IonContent>
      </IonPage>
    </>
  );
};
