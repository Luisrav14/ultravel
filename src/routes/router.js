import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

import Menu from "../components/Menu";

import { HomePage } from "../pages/HomePage";
import { NoticiasPage } from "../pages/NoticiasPage";
import { EventosPage } from "../pages/EventosPage";

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
            <NoticiasPage />
          </Route>
          <Route path="/eventos" exact={true}>
            <EventosPage />
          </Route>
          <Route path="/contacto" exact={true}>
            <NoticiasPage />
          </Route>
          <Route path="/login" exact={true}>
            <NoticiasPage />
          </Route>
          <Route path="/signup" exact={true}>
            <NoticiasPage />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Router;
