import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import {
   VALIDATOR_EMAIL,
    VALIDATOR_MIN 
  } from "../Utils/Validators"
  import {AuthContext} from "../Shared/context/auth-context"
  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
  import {  faSign, faSms, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
    
const Login = () => {
  
  const baseURL = "http://localhost:4000/api/user/login"

  const auth= useContext(AuthContext);

  const [email , setEmail ]= useState('')
  const [password, setPassword] = useState('')

  const data = {
    email : email,
    password : password,
  }
 
 const authSubmitHandler = e => {
  e.preventDefault();
  try{
    fetch('http://localhost:4000/api/user/login', {
    method: "POST",
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then( response =>{
    if(response){
         auth.login();   


    }
})  
  }catch(error){

  }
 }

    return( 

<div className="">



    <div className="row justify-content-center">

      <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4 display-4">Safe Login </h1>
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
                    <div className="form-group">
                      <input 
                      onChange={e =>{setPassword(e.target.value)}}
                      type="password"
                       className="form-control form-control-user" 
                       id="exampleInputPassword" 
                       placeholder="Password"
                       validators={[VALIDATOR_EMAIL()]}  required/>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input 
                        type="checkbox" 
                        className="custom-control-input" 
                        id="customCheck"/>
                        <label className="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <button type="submit"  className="btn btn-primary btn-user btn-block">
                     <FontAwesomeIcon icon={faSign}/> Login
                    </button>
                    {/* <hr/>
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </a> */}
                  </form>
                  <hr/>
                  <div className="text-center">
                    <span className="small" >Forgot Password?</span>
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

  </div>


    )
}
export default Login