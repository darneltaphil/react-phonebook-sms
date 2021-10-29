import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Swal from "sweetalert2";
const SmsForm = (props) => {
  console.log(props.to);
  const param = props.to === "all" ? "none" : "";
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  //const [smsModal, setSmsModal]= useState('');

  var raw_number = localStorage.getItem("number");
  let number = raw_number.substring(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:4000/api/send-sms/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: number,
          message: message,
        }),
      }).then((response) => {
        if (response) {
          Swal.fire({
            type: "success",
            timer: 2000,
            text: "SMS sent",
          });
        }
        //setSmsModal(false);
      });
    } catch (error) {}
  };

  return (
    <form className="needs-validation" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-md-8 mb-3">
          <FormLabel>Search Customer</FormLabel>
          {/* <div className="input-group mb-3">
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
        </div> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>

            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder=""
              required
              value={`233` + number}
            ></input>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="col-md-12 mb-3">
          {/* <label for="validationCustom03">Message</label> */}
          <textarea
            name="message"
            onChange={handleMessageChange}
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="Your message goes here"
            required
          />
        </div>
      </div>
      <input type="hidden" name="number" value={props.number} />
      <button className="btn btn-primary" type="submit">
        Send
      </button>
    </form>
  );
};
export default SmsForm;
