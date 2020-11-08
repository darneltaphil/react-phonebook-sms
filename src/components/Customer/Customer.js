import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faPlus, faSms } from "@fortawesome/free-solid-svg-icons"
import Modal from 'react-bootstrap/Modal'
import CustomerForm from "./CustomerForm"
import CustomerSearchForm from "./CustomerSearchForm"
import SmsForm from "../Sms/SmsForm"
import CustomerList from "./CustomerList"
import { VALIDATOR_REQUIRE } from '../Utils/Validators'
import swal from "sweetalert2"
import axios from "axios"

const Customer = () => {
    //handle Modal Show/Close
const [show, setShow] = useState(false);
const handleCustomerModalClose = () => setShow(false);
const handleCustomerModalShow = () => setShow(true);
    //handle Send SMs Modal Show/Close
const [smsModal, setSmsModal]= useState(false);
const handleSmsModalClose = () => setSmsModal(false);
const handleSmsModalShow = () => setSmsModal(true);

const [send, setSend] = useState([]);
const [noContact, setNoContact] = useState();

const phonebook = async () => {

  const uid= localStorage.getItem('currentUserId')

 try { 
   const responseData = await axios.get('http://localhost:4000/api/customers/'+uid)
                        .then(response => {
                          //console.log(response)
                                if(response.data.no_contact){
                                    setNoContact(response.data.no_contact)
                                }else{
                                  if(response.data.customers === false){
                                    swal.fire("Contacts list database could not be reached",)
                                }else{
                                        setSend(response.data.customers) 
                                    }
                                }
                                  
                                  })

 }catch(error){
  
 }
};

useEffect(() => {
  phonebook()
}, [])

return (
        <div className="container-fluid">

        <h1 className="h3 mb-2 text-gray-800">Contact List</h1>
          
        <p className="mb-4">View your Contact details, Edit their information and Engage them.</p>
        {/*Tabed Menu Row*/}
           <div className="row">
              <div className="col-lg-12 col-md-12 col-sd-12 mb-3">
                  <div onClick={handleCustomerModalShow} id="AddNewClient" className="btn btn-primary btn-icon-split mx-2 mb-3" data-toggle="modal" data-target="#AddNewClient_modal" data-backdrop="static" data-keyboard="false" >
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span className="text">New Customer</span>
                </div>
                <div onClick={handleSmsModalShow}  id="sms_to_all" className="btn btn-success btn-icon-split mx-2 mb-3">
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faSms} />
                  </span>
                  <span className="text">Send SMS to all</span>
                </div>

                {/* <div id="refreshlist" className="btn btn-warning btn-icon-split mx-2 ">
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faSyncAlt} />
                  </span>
                  <span className="text">Refresh List</span>
                </div> */}
                   </div> 
          </div>


        {/*Content Row*/}
       <div className="row">
        <div className="card shadow mb-4 col-lg py-0 px-0">
          <div className="card-header py-3 d-flex flex-row  justify-content-between ">
            <h6 className="m-0 font-weight-bold text-primary">Manage Customers</h6>
          </div>
          <div className="card-body pl-3" >
              <CustomerSearchForm validator={[VALIDATOR_REQUIRE()]}  />
              {noContact ? "<center>You have no contact</center>" : <CustomerList  items={send}/>}
              
          </div>
        </div>
      </div>


        <Modal
                show={show}
                onHide={handleCustomerModalClose}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header className="bg-gradient-primary text-white"  closeButton>
                <Modal.Title >Contact Form</Modal.Title>
            </Modal.Header>

                <Modal.Body>
                <CustomerForm />
                </Modal.Body>
      </Modal>


        <Modal
                show={smsModal}
                onHide={handleSmsModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="bg-gradient-success text-white"  closeButton>
                    <Modal.Title >SMS</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <SmsForm to="all"  />
                </Modal.Body>
                
      </Modal>
      </div>

    )
}
export default Customer