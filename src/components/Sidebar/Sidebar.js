import React from "react"
import { faSignOutAlt, faSlidersH, faSms, faTachometerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom"
import SidebarMenuItem from "./SidebarMenuItem"
//import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon  text-white ">
                STAY-UP
                </div>
                <div className="sidebar-brand-text mx-3 rotate-n-15 text-white"><sub>1.0.0 </sub></div>
        </a>
    
        <hr className="sidebar-divider my-0"/> 
        <SidebarMenuItem icon={faTachometerAlt} name="Dashboard" link="/" />                     
        <SidebarMenuItem icon={faUser} name="Customer" link="/customer"  />
        <SidebarMenuItem icon={faSms} name="SMS"  link="/sms" />
        <SidebarMenuItem icon={faSlidersH} name="Settings" link="/settings"  />
        <hr className="sidebar-divider my-0"/>
        <SidebarMenuItem icon={faSignOutAlt} name="Logout" link="/"  />

</ul> 

    )
}
export default Sidebar;