import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import {
   VALIDATOR_EMAIL,
  } from "../Utils/Validators"
import { AuthContext } from "../Shared/context/auth-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faSignInAlt } from "@fortawesome/free-solid-svg-icons"
import Spinner from "react-bootstrap/esm/Spinner"

const Login = () => {

  let  baseURL = "http://localhost:4000/api/user/login"

  const auth= useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [email , setEmail ]= useState('')
  const [password, setPassword] = useState('')

  const data = {
    email : email,
    password : password,
  }
 
 const authSubmitHandler =async  e => {
  e.preventDefault();
  try{
    setIsLoading(true);
    const response =await fetch(baseURL, {
                method: "POST",
                headers : {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
          })  
          
    const responseData = await response.json()
    
    console.log(responseData)
    if(!response.ok){
      setIsLoading(false);
      return new Error (responseData.message)
    }
    
    auth.login()
 
 }catch(error){
  setIsLoading(false);
  setError(error.message || 'Something went wring, please try again');
}
 }

    return( 

    <div className="row justify-content-center">

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
                        />
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
                    {isLoading && <center> <Spinner animation="border" variant="primary" /></center>}
                    <button type="submit"  className=" mt-3 btn btn-primary btn-user btn-block">
                     <FontAwesomeIcon icon={faSignInAlt}/> Login
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