import React from 'react';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom"
// import Header from "./components/Header/Header"
import Dashboard from "./components/Dashboard/Dashboard"
import Customer from "./components/Customer/Customer"
import Sms from "./components/Sms/Sms"
import Sidebar from "./components/Sidebar/Sidebar"
// import Sidebar2 from "./components/Sidebar/Sidebar2"
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Shared/sb-admin-2.css";  
import Settings from './components/Settings/Settings';

function App() {

  return (

    <div id="page-top" >  
      <Router>
        <Sidebar /> 
       <div id="wrapper">
  
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content container">
                {/* <Header /> */}
                <Switch>
                  <Route path="/" exact>
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
              </Switch>
                </div>
            </div>
            
        </div> 
        </Router>
    </div> 
  );
}

export default App;
