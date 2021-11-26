import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Messenger from "../pages/messenger";
import News from "../pages/news";

const Auth = (props) => (
  <>
    <Route path={["/", "/signin"]} exact>
      <Signin />
    </Route>
    <Route path="/signup" exact>
      <Signup />
    </Route>
    <Route path="/recover" exact>
      <p>Recover</p>
    </Route>
  </>
);

const App = (props) => (
  <>
    <Route path="/messenger" exact>
      <Messenger />
    </Route>
    <Route path="/news" exact>
      <News />
    </Route>
  </>
);

export default function Router(props) {
  
  return (
    <BrowserRouter>
      <Switch>{true ? <App /> : <Auth />}</Switch>
    </BrowserRouter>
  );
}
