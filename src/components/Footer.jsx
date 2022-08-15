import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/react';

export const Footer = () => (
    <>
        <IonContent />

        {/*-- Fade Footer --*/}
        <IonFooter collapse="fade">
            <IonToolbar className='header'>
                <IonTitle className='ion-text-center'>Copyright © 2022 Ultravel</IonTitle>
            </IonToolbar>
        </IonFooter>
    </>
);