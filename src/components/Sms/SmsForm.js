import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTimes, faUser } from "@fortawesome/free-solid-svg-icons"
import FormLabel from "react-bootstrap/esm/FormLabel";

const SmsForm = props => {
    const param= props.to==="all" ? "none":"";
    
    return (
        <form className="needs-validation"  >
  <div className="form-row" style={{"display":param}}>
  <div className="col-md-8 mb-3">
        
        <FormLabel>Search Customer</FormLabel>
        <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faUser}/> 
                  </span>
              </div>
  
                  <input type="text" className="form-control" id="validationCustom02" placeholder=""  required />
  
              <div className="input-group-append">
                  <span className="input-group-text" id="resetsearch">
                  <FontAwesomeIcon icon={faTimes} /> 
                  </span>
              </div>
        </div>
        
      </div>
    <div className="col-md-4 mb-3">
      <FormLabel>Select Group</FormLabel>
      <select type="text" className="form-control" id="validationCustom01" placeholder="First name"  >

      </select>
    </div>

  </div>
  <div className="form-row"  style={{"display":param}}>
    <div className="col-md-12 mb-3">
      <div className="alert-primary border-1 ">Selected SMS recipients list goes here</div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-12 mb-3">
      {/* <label for="validationCustom03">Message</label> */}
      <textarea type="text" className="form-control" id="validationCustom03" placeholder="Your message goes here" required />
    </div>
  </div>
  <div className="col-md-6 mb-3">
      {/* <label for="validationCustom01">Select Sender Id</label> */}
     <select type="text" className="form-control" id="validationCustom01"  required >

      </select>
    </div>
    <button className="btn btn-primary" type="submit">Send</button>
</form>

   )
}
export default SmsForm