import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../components/Header";

export const EventosPage = () => {
  return (
    <>
      <IonPage>
        <Header title="Eventos" />
        <IonContent>
          <div className="container">
            <ion-datetime locale="es-GB-u-hc-h12" style={{ rounded: "10px" }}>
              <span slot="title">Selecciona un día de evento</span>
              <span slot="time-label">Tiempo</span>
            </ion-datetime>
          </div>
          <div style={{ padding: "1em" }}>
            <virtual-scroll-element class="ion-content-scroll-host">
              <ion-reorder-group disabled="false">
                <ion-item>
                  <ion-label>Item 1</ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label>Item 2</ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label>Item 2</ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label>Item 2</ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
                <ion-item>
                  <ion-label>Item 2</ion-label>
                  <ion-reorder slot="end"></ion-reorder>
                </ion-item>
              </ion-reorder-group>
            </virtual-scroll-element>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};
