import { IonButtons, IonHeader, IonImg, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import logo from "../assets/images/logo.png";
import '../assets/css/Header.css';

export const Header = ({ title }) => {

  return (
    <IonHeader >
      <IonToolbar className="header">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <ion-grid>
          <ion-row className='ion-align-items-center' >
            <ion-col>
            </ion-col>
            <ion-col>
              <IonTitle 
              align="center" 
              style={{ fontSize: "1.5rem", marginTop: "0.5rem", marginLeft: "-2rem" }} 
              >{title}</IonTitle>
            </ion-col>
            <ion-col>
              <IonImg src={logo} style={{ height: '3rem' }} />
            </ion-col>
          </ion-row>
        </ion-grid>
      </IonToolbar>
    </IonHeader>
  );
};
