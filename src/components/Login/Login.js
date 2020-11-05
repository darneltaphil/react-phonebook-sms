import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import {
   VALIDATOR_EMAIL,
  } from "../Utils/Validators"
  import { AuthContext } from "../Shared/context/auth-context"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
  import { faSign } from "@fortawesome/free-solid-svg-icons"
  import alertify from "alertifyjs";
const Login = () => {
  const auth= useContext(AuthContext);

  let  baseURL = "http://localhost:4000/api/user/login"

  const [email , setEmail ]= useState('')
  const [password, setPassword] = useState('')

  const data = {
    email : email,
    password : password,
  }
 
 const authSubmitHandler =async  e => {
  e.preventDefault();
  try{
    fetch(baseURL, {
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

    <div className="row justify-content-center bg-gradient-primary">

      <div className="col-xl-10 col-lg-11 col-md-10">

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6     bg-login-image"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-primary mb-4 display-4">Safe Login </h1>
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
                       validators={[VALIDATOR_EMAIL()]}  required
                       onClick={()=>{ alertify.success('Success message');}} />
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
                  </form>
                  <hr/>
                  <div className="text-center">
                    <Link to="/reset" className="small" >Forgot Password?</Link>
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
export default Login