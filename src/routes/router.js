import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Menu from "../components/Menu.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { EventosPage } from "../pages/EventosPage";
import { GaleriaPage } from "../pages/GaleriaPage.jsx";
import { HomePage } from "../pages/HomePage";
import { NoticiasPage } from "../pages/NoticiasPage";
import { ContactoPage } from "../pages/ContactoPage.jsx";

const Router = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/" exact={true}>
          <HomePage />
          </Route>
          <Route path="/noticias" exact={true}>
            <NoticiasPage />
          </Route>
          <Route path="/galeria" exact={true}>
            <GaleriaPage />
          </Route>
          <Route path="/eventos" exact={true}>
            <EventosPage />
          </Route>
          <Route path="/contacto" exact={true}>
            <ContactoPage />
          </Route>
          <Route path="/login" exact={true}>
            <NoticiasPage />
          </Route>
          <Route path="/register" exact={true}>
            <NoticiasPage />
          </Route>
          <Route path="/register" component={Register} exact></Route>
          <Route path="/login" component={Login} exact></Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Router;
