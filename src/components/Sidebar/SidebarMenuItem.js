import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

const SidebarMenuItem = props => {
   // console.log(props)
    return (
        
<Link to={props.link} className="nav-item">
    <div className="nav-link"  >
        <FontAwesomeIcon icon={props.icon} size="2x" /> 
        <h4 className="menu-items " style={{"display":"inline", "paddingLeft":"15px"}}>{props.name}</h4>
    </div>
</Link>
    )
}
export default SidebarMenuItem;