import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

const SidebarMenuItem = props => {
   // console.log(props)
    return (
        
<Link to={props.link} className=" text-white " style={{textDecoration:"none"}}>
        <FontAwesomeIcon icon={props.icon} size="2x" /> &nbsp;
        {props.name}
</Link>
    )
}
export default SidebarMenuItem;