import React from "react"
import {Link} from "react-router-dom"
import CustomerAvatar from "./CustomerAvatar"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSms, faMobileAlt, faEdit, faTrashAlt, faCopy } from "@fortawesome/free-solid-svg-icons"

const CustomerItem = props => {

    return(
    
  <Card style={{ borderBottom:'0px', borderRadius:'0px'}} >
    <Card.Header className="table-hover" style={{ height: '2.7rem', padding:'1px', borderBottom:'0px'}} >

        <Accordion.Toggle as={Card.Header} variant="light"  eventKey="0">
            <Link to={`/${props.id}/`} ><CustomerAvatar src={props.image} alt={props.name} /></Link>  {props.name}
        </Accordion.Toggle>

            
    </Card.Header>

    <Accordion.Collapse eventKey="0">
      <Card.Body>
            <div><strong> Mobile: </strong>{props.mobile} </div>
            <div><strong> Email:</strong> {props.email} </div>
            <div><strong> Address:</strong> {props.address}, {props.city} </div>
            <div><strong> GhanaPostGps: </strong>{props.gps} </div>
            <ButtonGroup aria-label="Basic example" className="d-flex d-none d-sm-block"  >
                <Button variant="primary"id={props.mobile} title="Call"  ><FontAwesomeIcon icon={faMobileAlt} /> </Button>
                <Button variant="success" id={props.mobile} title="Send SMs" ><FontAwesomeIcon icon={faSms}/></Button>
                <Button variant="dark" id={props.id} title="Edit Contact" ><FontAwesomeIcon icon={faEdit} /> </Button>
                <Button variant="warning" id={props.mobile} title="Copy Number" ><FontAwesomeIcon icon={faCopy} /> </Button>
                <Button variant="danger" title="Delete Contact" id={props.id} ><FontAwesomeIcon icon={faTrashAlt} /> </Button>
            </ButtonGroup>

      </Card.Body>
            
    </Accordion.Collapse>
  </Card>
    
);

}
export default CustomerItem; 