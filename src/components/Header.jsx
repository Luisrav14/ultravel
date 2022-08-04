import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from "@ionic/react";

export const Header = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
