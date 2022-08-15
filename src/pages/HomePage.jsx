
import { IonFab, IonFabButton, IonIcon  } from "@ionic/react";
import { bed, airplane, bus } from "ionicons/icons";
import { IonContent, IonPage } from "@ionic/react";
import { Footer } from "../components/Footer";
import "../assets/css/index.css";
import { Header } from "../components/Header";
import { Refresher } from "../components/Refresher";

export const HomePage = () => {
  return (
    <>
      <IonPage>
        <Header title="Inicio" />
        <IonContent>
          <Refresher />
          <div className="header-inicio" style={{ marginTop: "-4%", height: "35%", width: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80')", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "0 0 35% 35%", opacity: "0.9" }}>
          <div className="buttons-inicio">
            <ul>
              <li className="item-button">
                <IonFab horizontal="end" vertical="center" style={{ marginTop: "-19em", marginRight: "3em" }}>
                  <IonFabButton>
                    <IonIcon icon={bus}></IonIcon>
                  </IonFabButton>
                  Bus
                </IonFab>
              </li>
              <li className="item-button">
                <IonFab horizontal="center" vertical="center" style={{ marginTop: "-19em", marginRight: "1em" }}>
                  <IonFabButton>
                    <IonIcon icon={airplane}></IonIcon>
                  </IonFabButton>
                  Viajes
                </IonFab>
              </li>
              <li className="item-button">
                <IonFab horizontal="start" vertical="center" style={{ marginTop: "-19em", marginLeft: "3em" }}>
                  <IonFabButton>
                    <IonIcon icon={bed}></IonIcon>
                  </IonFabButton>
                  Hoteles
                </IonFab>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="cards">
        <ion-card  >
            <img src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <ion-card-header >
           
              <ion-card-title>Amo los viajes</ion-card-title>
            </ion-card-header>
            <ion-card-content >Estas en sitio adecuado, da clic en ver viajes para que pueda observar su proximo destino</ion-card-content>
             <input className="btn-enviar" type="button" value="Ver viajes" style={{marginLeft:"8.5em", marginBottom:"15px"}} />
          </ion-card>
          <ion-card>
            <img src="https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <ion-card-header >
           
              <ion-card-title>Promociones</ion-card-title>
            </ion-card-header>
            <ion-card-content>Promociones increibles te esperan a ti y a tu familia. Ven con nosotros y diviertete.</ion-card-content>
            <input className="btn-enviar" type="button" value="Ver promos" style={{marginLeft:"8.2em", marginBottom:"15px"}} />
          </ion-card>
          <Footer />
        </div>
       
        </IonContent>
        
      </IonPage>
      
    </>
  );
};
