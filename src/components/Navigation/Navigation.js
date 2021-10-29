import React, { useContext } from "react"
import { faSignOutAlt, faSlidersH, faSms, faUser } from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { AuthContext } from "../Shared/context/auth-context"
import swal from "sweetalert"


const Navigation = () => {
  const auth= useContext(AuthContext);

  const handleLogout = e => {
    swal({
      title: "Do you want to log out?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      auth.logout();
      } else {
      }
    });    
}
    return (
        <Navbar  expand="lg" className=" bg-gradient-primary text-white mb-3 ">
        <Navbar.Brand  className=" text-white  pr-5 ">
                ENGAGE.io
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" text-white  " />

        <Navbar.Collapse className=" text-white  " id="responsive-navbar-nav" >
            <Nav className="mr-auto text-white">
                {/* <Nav.Link className=" text-white pr-3 "><NavItems icon={faTachometerAlt} name="Dashboard" link="/dashboard"  /></Nav.Link> */}
               
                <Nav.Link className=" text-white pr-3 ">
                  <NavItems icon={faUser} name="Customer" link="/customer"  />
                </Nav.Link>

                <Nav.Link className=" text-white pr-3 ">
                  <NavItems icon={faSms} name="Send SMS"  link="/sms" />
                </Nav.Link>

                <Nav.Link className=" text-white pr-3 ">
                  <NavItems icon={faSlidersH} name="Settings" link="/settings"  />
                </Nav.Link>

                <Nav.Link className=" text-white pr-3 " onClick={handleLogout}>
                  <NavItems icon={faSignOutAlt} name="Logout" link={window.location.pathname}   />
                </Nav.Link>
            </Nav>
          
        </Navbar.Collapse>
        
       </Navbar>
    )
}
export default Navigation;