import React, {useState, useCallback, useContext} from 'react';
import { 
  BrowserRouter as Router , 
  Route, 
  Redirect, 
  Switch 
} from "react-router-dom"

import Dashboard from "./components/Dashboard/Dashboard"
import Customer from "./components/Customer/Customer"
import Sms from "./components/Sms/Sms"
import Login from "./components/Login/Login"
import Sidebar from "./components/Sidebar/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Shared/sb-admin-2.css";  
import Settings from './components/Settings/Settings';
import {AuthContext} from "./components/Shared/context/auth-context"

const  App = () =>  {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  } , [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

const auth= useContext(AuthContext);

let routes ; 


        routes = (
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard/>
          </Route>
          <Route path="/Customer" exact >
            <Customer />
          </Route>
          <Route path="/sms" exact>
            <Sms/>
          </Route>
          <Route path="/settings" exact>
            <Settings/>
          </Route> 
          <Redirect to="/dashboard" /> 
      </Switch> );

  return (

    
      
      
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login : login , logout: logout }} >
      
      {auth.isLoggedIn && (
      <div id="page-top" > <Router >
        <Sidebar /> 
       <div id="wrapper">
  
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content container">
                {routes}
                </div>
            </div>
            
        </div> 
        </Router>
        </div>
        )}

        {!auth.isLoggedIn && (

          <Router path="/login" exact>
               <Login/>
          </Router>
        ) }  
        
     
  </AuthContext.Provider>
  
  );
}

export default App;
