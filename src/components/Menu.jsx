import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from "@ionic/react";

import { useLocation } from "react-router-dom";
import { imageOutline, homeOutline, newspaperOutline, personOutline, phonePortraitOutline, peopleOutline, calendarOutline } from "ionicons/icons";
import "../assets/css/Menu.css";

const appPages = [
  {
    title: "Inicio",
    url: "/",
    iosIcon: homeOutline,
    mdIcon: homeOutline,
  },
  {
    title: "Noticias",
    url: "/noticias",
    iosIcon: newspaperOutline,
    mdIcon: newspaperOutline,
  },
  {
    title: "Galería",
    url: "/galeria",
    iosIcon: imageOutline,
    mdIcon: imageOutline,
  },
  {
    title: "Eventos",
    url: "/eventos",
    iosIcon: calendarOutline,
    mdIcon: calendarOutline,
  },
  {
    title: "Contacto",
    url: "/contacto",
    iosIcon: phonePortraitOutline,
    mdIcon: phonePortraitOutline,
  },
  {
    title: "Inicio de sesión",
    url: "/login",
    iosIcon: personOutline,
    mdIcon: personOutline,
  },
  {
    title: "Regístrarse",
    url: "/register",
    iosIcon: peopleOutline,
    mdIcon: peopleOutline,
  },
];

const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>ULTRAVEL</IonListHeader>
          <IonNote>
            {" "}
            <hr />{" "}
          </IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? "selected" : ""} href={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
