import React, { useContext } from "react"
import { faSignOutAlt, faSlidersH, faSms, faTachometerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarMenuItem from "./SidebarMenuItem"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { AuthContext } from "../Shared/context/auth-context"



const Sidebar = () => {
  const auth= useContext(AuthContext);
    return (
        <Navbar  expand="lg" className=" bg-gradient-primary text-white mb-3 ">
        <Navbar.Brand  className=" text-white  pr-5 ">
                STAY-UP
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" text-white  " />

        <Navbar.Collapse className=" text-white  " id="responsive-navbar-nav" >
            <Nav className="mr-auto text-white">
                {/* <Nav.Link className=" text-white pr-3 "><SidebarMenuItem icon={faTachometerAlt} name="Dashboard" link="/dashboard"  /></Nav.Link> */}
                <Nav.Link className=" text-white pr-3 "><SidebarMenuItem icon={faUser} name="Customer" link="/customer"  /></Nav.Link>
                <Nav.Link className=" text-white pr-3 "><SidebarMenuItem icon={faSms} name="Send SMS"  link="/sms" /></Nav.Link>
                <Nav.Link className=" text-white pr-3 "><SidebarMenuItem icon={faSlidersH} name="Settings" link="/settings"  /></Nav.Link>
                <Nav.Link className=" text-white pr-3 "><SidebarMenuItem icon={faSignOutAlt} name="Logout" link="/login" onClick={auth.logout}  /></Nav.Link>
            </Nav>
          
        </Navbar.Collapse>
        
        {/* <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon  text-white ">
                STAY-UP
                </div>
                <div className="sidebar-brand-text mx-3 rotate-n-15 text-white"><sub>1.0.0 </sub></div>
        </div>
        
        <hr className="sidebar-divider my-0"/> 
        <div className="nav">

        
        <SidebarMenuItem icon={faTachometerAlt} name="Dashboard" link="/" />                     
        <SidebarMenuItem icon={faUser} name="Customer" link="/customer"  />
        <SidebarMenuItem icon={faSms} name="Send SMS"  link="/sms" />
        <SidebarMenuItem icon={faSlidersH} name="Settings" link="/settings"  />
        <hr className="sidebar-divider my-0"/>
        <SidebarMenuItem icon={faSignOutAlt} name="Logout" link="/"  />
        </div>
</ul> */}
      </Navbar>




    )
}
export default Sidebar;