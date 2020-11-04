import React, {useState, useCallback} from 'react';
import { 
  BrowserRouter as Router , 
  Route, 
  Redirect, 
  Switch, 
  BrowserRouter
} from "react-router-dom"

// import Dashboard from "./components/Dashboard/Dashboard"
import Customer from "./components/Customer/Customer"
import Sms from "./components/Sms/Sms"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import Navigation from "./components/Navigation/Navigation"
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

//const auth= useContext(AuthContext);

let routes ; 

if(isLoggedIn){
  routes = (
     <React.Fragment>
     <Navigation /> 
       <Route path="/Customer" exact >
        <Customer />
      </Route>
      <Route path="/sms" exact>
        <Sms/>
      </Route>
      <Route path="/settings" exact>
        <Settings/>
      </Route> 
      <Redirect to="/Customer" /> 
     </React.Fragment>  
  );
}else{
  routes = (
    <React.Fragment>
      <Route path="/login" exact >
       <Login />
     </Route>
      <Route path="/signup" exact >
       <Signup />
     </Route>
     <Redirect to="/login" /> 
    </React.Fragment>  
  );
}
        
  return (

      
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login : login , logout: logout }} >
      <BrowserRouter>
      <Switch>
      {/* {auth.isLoggedIn && ( */}
      <Router >
       {/* <div id="wrapper"> */}
  
            {/* <div id="content-wrapper" className="d-flex flex-column"> */}
                {/* <div id="content container"> */}
                {routes}
                {/* </div> */}
            {/* </div> */}
            
        {/* </div>  */}
        </Router>
        {/* )} */}

                </Switch>
         </BrowserRouter>
  </AuthContext.Provider>
  
  );
}

export default App;
