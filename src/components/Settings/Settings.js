import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEllipsisV, faMailBulk, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
const Settings = () => {
    return (
      <div className="container-fluid">

        <div className=" align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">Settings</h1>
        <p className="mb-4">Tune the App</p>
        </div>
        
           <div className="row">
              <div className="col-lg-12 col-md-12 col-sd-12 mb-3">
                  <div id="AddNewClient" className="btn btn-danger btn-icon-split mx-2" data-toggle="modal" data-target="#AddNewClient_modal" data-backdrop="static" data-keyboard="false" >
                  <span className="icon text-white-50">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                  <span className="text">Delete This Account</span>
                </div>
                 <div id="sms_to_all" className="btn btn-success btn-icon-split mx-2">
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faMailBulk} />
                  </span>
                  <span className="text">Invite a Friend</span>
                </div>
{/*
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
                <h6 className="m-0 font-weight-bold text-primary">SMS</h6>
                <div className="dropdown no-arrow">
                  <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <h6 className="m-0 font-weight-bold text-primary">Profile     </h6>
                <div className="dropdown no-arrow">
                  <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon={faEllipsisV} />
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                </div>
              </div>
              <div className="card-body">

              </div>
            </div>
          </div>
          </div>


      </div>


    )
}
export default Settings