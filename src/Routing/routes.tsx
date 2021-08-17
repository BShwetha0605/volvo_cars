import { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WithSuspense from "./WithSuspense";
import MainLayoutContent from '../Components/Layout/Layout'

const LandingPage = WithSuspense(
  lazy(() => import("../Pages/LandingPage/LandingPage")),
  <div/>
);

const PageNotFound = WithSuspense(
  lazy(() => import("../Pages/PageNotFound/PageNotFound")),
  <div/>
);


const RouterContainer = () => {
  return (
    <Router>
      <MainLayoutContent>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route
            exact
            path={"/volvoCars"}
            component={LandingPage}
          />
                  
          <Route component={PageNotFound} />
        </Switch>
      </MainLayoutContent>
    </Router>
  );
};

export default RouterContainer;
