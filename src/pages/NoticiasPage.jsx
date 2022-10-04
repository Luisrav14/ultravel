import { IonContent, IonPage, IonRow } from "@ionic/react";

import { Header } from "../components/Header";
import { Refresher } from "../components/Refresher";

export const NoticiasPage = () => {
  return (
    <>
      <IonPage>
        <Header title="Noticias" />
        <IonContent>
          <Refresher />
          <IonRow style={{ justifyContent: 'center' }}>
            <div className="img-SnapUp">

              <ion-card>
                <img src="https://samsungmx.vtexassets.com/arquivos/ids/184025-800-auto?width=800&height=auto&aspect=true" />
                <ion-card-header>
                  <ion-card-subtitle>Samsung</ion-card-subtitle>
                  <ion-card-title>Galaxy S22 Ultra</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  Alamcenamiento interno de 512 Gb
                  Color Verder
                </ion-card-content>
              </ion-card>
            </div>
            <div className="img-SnapUp">

              <ion-card>
                <img src="https://www.att.com/idpassets/global/devices/phones/apple/apple-iphone-13-pro-max/Carousel/alpinegreen/AlpineGreen-1.png" />
                <ion-card-header>
                  <ion-card-subtitle>Apple</ion-card-subtitle>
                  <ion-card-title>Iphone 13</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  Almacenamiento interno de 256 Gb
                  Color verde
                </ion-card-content>
              </ion-card>

            </div>
          </IonRow>
        </IonContent>
      </IonPage>
    </>
  );
};
