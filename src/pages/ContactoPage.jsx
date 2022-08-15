import { IonPage, IonItem, IonLabel, IonInput } from "@ionic/react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "../assets/css/Contacto.css";

import logo from "../assets/images/logo.jpg";

export const ContactoPage = () => {
  return (
    <IonPage>
      <Header title="Galeria" />

      <div className="container-contacto">
        <div className="formulario">
          <img className="logo" src={logo} alt="logo" />
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput value=""></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Telefono</IonLabel>
            <IonInput inputMode="tel" value=""></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Mensaje</IonLabel>
            <IonInput value=""></IonInput>
          </IonItem>

          <input className="btn-enviar" type="button" value="Enviar" />
        </div>
      </div>

      <Footer />
    </IonPage>
  );
};
