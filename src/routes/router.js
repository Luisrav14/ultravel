import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "../components/Menu";
import Page from "../pages/Page";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Router = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/" exact={true}>
            <Redirect to="/page/Inbox" />
          </Route>
          <Route path="/page/:name" exact={true}>
            <Page />
          </Route>
          <Route path="/register" component={Register} exact></Route>
          <Route path="/login" component={Login} exact></Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Router;
