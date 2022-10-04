import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from "@ionic/react";

import { calendarOutline, homeOutline, imageOutline, newspaperOutline, peopleOutline, personOutline, phonePortraitOutline, bagHandleOutline } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import "../assets/css/Menu.css";

const appPages = [
  {
    title: "Inicio",
    url: "/",
    iosIcon: homeOutline,
    mdIcon: homeOutline,
  },
  {
    title: "Productos",
    url: "/productos",
    iosIcon: bagHandleOutline,
    mdIcon: bagHandleOutline,
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
      <IonContent className="header" >
        <IonList id="inbox-list">
          <IonListHeader>SnapUp</IonListHeader>
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
