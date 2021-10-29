import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  BrowserRouter,
} from "react-router-dom";

import Customer from "./components/Customer/Customer";
import Sms from "./components/Sms/Sms";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Shared/sb-admin-2.css";
import Settings from "./components/Settings/Settings";
import { AuthContext } from "./components/Shared/context/auth-context";
import Reset from "./components/Reset/Reset";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return true;
  });
  const [userId, setUserId] = useState(() => {
    return false;
  });

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Navigation />
        <Route path="/customer" exact>
          <Customer />
        </Route>
        <Route path="/sms" exact>
          <Sms />
        </Route>
        <Route path="/settings" exact>
          <Settings />
        </Route>
        <Redirect to="/customer" />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/reset" exact>
          <Reset />
        </Route>
        <Redirect to="/login" />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Router>{routes}</Router>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
