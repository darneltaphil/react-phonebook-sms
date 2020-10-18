import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEllipsisV, faPlus } from "@fortawesome/free-solid-svg-icons"
import SmsForm from "./SmsForm"
const Sms = () => {
    return (
      <div className="container-fluid">

        <div className=" align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">Manage SMS Campaign</h1>
        <p className="mb-4">View your customers details, Edit their information and Engage them.</p>
        </div>
        
           <div className="row">
              <div className="col-lg-12 col-md-12 col-sd-12 mb-3">
                  <div id="AddNewClient" className="btn btn-primary btn-icon-split mx-2" data-toggle="modal" data-target="#AddNewClient_modal" data-backdrop="static" data-keyboard="false" >
                  <span className="icon text-white-50">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span className="text">Add Pre-Composed SMS</span>
                </div>
                {/* <div id="sms_to_all" className="btn btn-success btn-icon-split mx-2">
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faSms} />
                  </span>
                  <span className="text">Send SMS to all</span>
                </div>

                <div id="refreshlist" className="btn btn-warning btn-icon-split mx-2 ">
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faSyncAlt} />
                  </span>
                  <span className="text">Refresh List</span>
                </div> */}
                   </div>
           </div>




          <div className="row">

          <div className="col-xl-6 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Pre-Composed SMS</h6>
                <div className="dropdown no-arrow">
                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faEllipsisV} />
                  </a>
                  </div>
              </div>
              <div className="card-body">
                
                  
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Compose     </h6>
                <div className="dropdown no-arrow">
                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faEllipsisV} />
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <SmsForm />
              </div>
            </div>
          </div>
          </div>


      </div>


    )
}
export default Sms