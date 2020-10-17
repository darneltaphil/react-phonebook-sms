import React, {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSave, faPlus, faSms, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import Modal from 'react-bootstrap/Modal'
import SmsForm from "../Sms/SmsForm"
const SmsModal = props => {


const [smsModal, setSmsModal]= useState(false);
const handleSmsModalClose = () => setSmsModal(false);
const handleSmsModalShow = () => setSmsModal(true);

return (
        <div>


      <Modal
                show={smsModal}
                onHide={handleSmsModalClose}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header className="bg-gradient-primary text-white"  closeButton>
                <Modal.Title >Contact Form</Modal.Title>
            </Modal.Header>

                <Modal.Body>
                <SmsForm />
                </Modal.Body>
                
                <Modal.Footer>
                    <div className="btn btn-dark"  onClick={handleSmsModalClose}>
                        Close
                    </div>
                    {/* <div className="btn btn-primary"> 
                        <FontAwesomeIcon icon={faSave} />
                        Save
                    </div> */}
                </Modal.Footer>
      </Modal>
      </div>

    )
}
export default SmsModal