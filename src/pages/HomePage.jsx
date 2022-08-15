import { IonFab, IonFabButton, IonIcon, IonPage } from "@ionic/react";
import { bed, airplane, bus } from "ionicons/icons";

import { Header } from "../components/Header";
import "../assets/css/index.css";

export const HomePage = () => {
  return (
    <>
      <Header title="Inicio" />
      <IonPage>
        <div className="header-inicio" style={{ marginTop: "4em", height: "35%", width: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80')", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "0 0 35% 35%", opacity: "0.9" }}>
          <div className="buttons-inicio">
            <ul>
              <li className="item-button">
                <IonFab horizontal="end" vertical="center" style={{ marginTop: "-12em", marginRight: "3em" }}>
                  <IonFabButton>
                    <IonIcon icon={bus}></IonIcon>
                  </IonFabButton>
                  Bus
                </IonFab>
              </li>
              <li className="item-button">
                <IonFab horizontal="center" vertical="center" style={{ marginTop: "-12em", marginRight: "1em" }}>
                  <IonFabButton>
                    <IonIcon icon={airplane}></IonIcon>
                  </IonFabButton>
                  Viajes
                </IonFab>
              </li>
              <li className="item-button">
                <IonFab horizontal="start" vertical="center" style={{ marginTop: "-12em", marginLeft: "3em" }}>
                  <IonFabButton>
                    <IonIcon icon={bed}></IonIcon>
                  </IonFabButton>
                  Hoteles
                </IonFab>
              </li>
            </ul>
          </div>
        </div>
        <div className="cards"></div>
      </IonPage>
    </>
  );
};
