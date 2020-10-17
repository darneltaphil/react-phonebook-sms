import React, {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSave, faPlus, faSms, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import Modal from 'react-bootstrap/Modal'
import CustomerForm from "./CustomerForm"
import SmsForm from "../Sms/SmsForm"
const Customer = props => {
    //
    //handle Modal Show/Close
const [show, setShow] = useState(false);
const handleCustomerModalClose = () => setShow(false);
const handleCustomerModalShow = () => setShow(true);
    //handle Send SMs Modal Show/Close
const [smsModal, setSmsModal]= useState(false);
const handleSmsModalClose = () => setSmsModal(false);
const handleSmsModalShow = () => setSmsModal(true);

return (
        <div className="container-fluid">

        <h1 className="h3 mb-2 text-gray-800">Customer List</h1>
          
        <p className="mb-4">View your clients details, Edit their information and Engage them.</p>
        {/*Tabed Menu Row*/}
           <div className="row">
              <div className="col-lg-12 col-md-12 col-sd-12 mb-3">
                  <div onClick={handleCustomerModalShow} href="#" id="AddNewClient" className="btn btn-primary btn-icon-split mx-2" data-toggle="modal" data-target="#AddNewClient_modal" data-backdrop="static" data-keyboard="false" >
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span className="text">New Customer</span>
                </div>
                <div onClick={handleSmsModalShow} href="#" id="sms_to_all" className="btn btn-success btn-icon-split mx-2">
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faSms} />
                  </span>
                  <span className="text">Send SMS to all</span>
                </div>

                <div  href="#" id="refreshlist" className="btn btn-warning btn-icon-split mx-2 ">
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faSyncAlt} />
                  </span>
                  <span className="text">Refresh List</span>
                </div>
                   </div> 
          </div>


        {/*Content Row*/}
        <div className="row">
        <div className="card shadow mb-4 col-lg py-0 px-0">
          <div className="card-header py-3 d-flex flex-row  justify-content-between ">
            <h6 className="m-0 font-weight-bold text-primary">Manage Customers</h6>
          </div>
          <div className="card-body pl-3" id="clientlist">
              

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
                
                <Modal.Footer>
                    <div className="btn btn-dark"  onClick={handleCustomerModalClose}>
                        Close
                    </div>
                    {/* <div className="btn btn-primary"> 
                        <FontAwesomeIcon icon={faSave} />
                        Save
                    </div> */}
                </Modal.Footer>
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
                <SmsForm to="all" />
                </Modal.Body>
                
                <Modal.Footer>
                    <div className="btn btn-dark"  onClick={handleSmsModalClose}>
                        Close
                    </div>
                </Modal.Footer>
      </Modal>
      </div>

    )
}
export default Customer