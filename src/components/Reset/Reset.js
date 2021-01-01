import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"
import {
   VALIDATOR_EMAIL,
  } from "../Utils/Validators"
  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Reset = () => {
    const [email , setEmail ]= useState('')
    const authSubmitHandler = e => {
        e.preventDefault();
        alert('Parssword Recovery email was sent successfully')
       }

       
    return (

<div className="row justify-content-center">

  <div className="col-xl-10 col-lg-12 col-md-9">

    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
          <div className="col-lg-6">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-primary mb-4 display-4">Recover Password </h1>
              </div>
              <form className="user" onSubmit={authSubmitHandler}>
                <div className="form-group">
                  <input 
                  onChange={e =>{setEmail(e.target.value)}}
                  type="email" 
                  className="form-control form-control-user" 
                  id="exampleInputEmail" 
                  aria-describedby="emailHelp" 
                  placeholder="Enter Email Address..."
                  validators={[VALIDATOR_EMAIL()]} required />
                </div>
                <button type="submit"  className="btn btn-primary btn-user btn-block">
                 <FontAwesomeIcon icon={faMailBulk}/> Send Email
                </button>
              </form>
              <hr/>
              <div className="text-center">
                <Link to="/login" className="small" >Login</Link>
              </div>
              <div className="text-center">
                <Link to="/signup" className="small">Create an Account!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
   )
}
export default Reset;