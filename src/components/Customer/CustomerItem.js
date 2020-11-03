import React, { useState, useRef }from "react";
import {Link} from "react-router-dom";
import CustomerAvatar from "./CustomerAvatar";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSms, faMobileAlt, faEdit, faTrashAlt, faCopy } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import SmsForm from "../Sms/SmsForm";
import axios from 'axios';
import swal from 'sweetalert2'


const CustomerItem = props => {
  const [smsModal, setSmsModal]= useState(false);
  const [smsNumber, setSmsNumber]= useState("");

  const handleDelete = (e) =>{
    const customerId = e.target.id
    console.log(customerId);
    swal.fire({
      title: "Delete Contact?",
      text: "Once deleted, you will not be able to recover this contact!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      fetch('http://localhost:4000/api/customers/delete/'+customerId, {
        method: "DELETE",
        headers : {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify(data)
      })
      
      .then( response =>{
        const msg= response.msg
      })
      // if (willDelete) {
      //   swal.fire("Poof! Your imaginary file has been deleted!", {
      //     icon: "success",
      //   });
      // } else {
      //   swal.fire("Your imaginary file is safe!");
      // }
    });
    
  }
  const handleSmsModalClose = (props) => {setSmsModal(false)};

  const handleSmsModalShow = e => {
    setSmsModal(true);
    setSmsNumber(e.target.id) 
    console.log(smsNumber)
    localStorage.setItem('number',props.mobile)
    
  };
 
  
    return(
  <>
  <Card style={{ borderBottom:'0px', borderRadius:'0px'}} >
    <Card.Header  style={{ height: '2.7rem', padding:'1px', borderBottom:'0px'}} >

        <Accordion.Toggle as={Card.Header} variant="light"  eventKey={props.id}>
            <Link to={`/${props.id}/`} ><CustomerAvatar src={props.image} alt={props.name} /></Link>  {props.name}
        </Accordion.Toggle>

            
    </Card.Header>

    <Accordion.Collapse eventKey={props.id}>
      <Card.Body>
            <div><strong> Mobile: </strong>{props.mobile} </div>
            {props.email 
            ?<div><strong> Email:</strong> {props.email} </div>
            :""}
            {props.address||props.city 
              ?<div><strong> Address:</strong> {props.address}, {props.city} </div>
              :""
            }
            {props.gps
              ?<div><strong> GhanaPostGps: </strong>{props.gps} </div> 
              : "" 
            }
            <ButtonGroup aria-label="Basic example" className="d-flex d-none d-sm-block"  >
                {/* <Button variant="primary"id={props.mobile} title="Call"   > 
                  
                    <FontAwesomeIcon icon={faMobileAlt} /> 
                  
                  </Button> */}
                <Button variant="success" id={props.mobile} title="Send SMs" onClick={handleSmsModalShow}> <FontAwesomeIcon icon={faSms}/>
                </Button>
                <Button variant="primary" id={props.id} title="Edit Contact" ><FontAwesomeIcon icon={faEdit} /> </Button>
                {/* <Button variant="warning" id={props.mobile} title="Copy Number" onClick={copyToClipboard} ><FontAwesomeIcon icon={faCopy} /> </Button> */}
                <Button variant="danger" title="Delete Contact" id={props.id} onClick={handleDelete} ><FontAwesomeIcon icon={faTrashAlt} /> </Button>
            </ButtonGroup>
      </Card.Body>
            
    </Accordion.Collapse>
  </Card> 
  <Modal
                show={smsModal}
                onHide={handleSmsModalClose}
                backdrop="static"
                keyboard={true}
            >
                <Modal.Header className="bg-gradient-success text-white"  closeButton>
                    <Modal.Title >SMS</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <SmsForm to="all" number={smsNumber}/>
                </Modal.Body>

      </Modal>
      </>  
);

}
export default CustomerItem; 