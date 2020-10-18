import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar"

const Header = props => {
 
return ( 
<Navbar className="navbar navbar-expand navbar-light bg-white topbar mb-2 static-top shadow">

<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
  <FontAwesomeIcon icon={faBars}/>
</button>



<ul className="navbar-nav ml-auto">
  <div className="topbar-divider d-none d-sm-block"></div>

  <li className="nav-item dropdown no-arrow">
  
    <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span className="mr-2 d-none d-lg-inline text-gray-600 small"></span>
       <img alt="" className="img-profile rounded-circle" src="" width="60px" />
    </a>
    
  </li>

</ul>

</Navbar>
);
}

export default Header;