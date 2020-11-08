import React, { useState, useContext, useEffect } from "react"
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
  const [checkValidEmail, setcheckValidEmail] = useState()
  const [checkValidPassword, setcheckValidPassword] = useState()
  const [email , setEmail ]= useState('')
  const [password, setPassword] = useState('')

  var validEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  

  useEffect( () => {
    // const handleEmailChange()
  if (!validEmail.test(email)) {
    setcheckValidEmail(false);
  }else{
    setcheckValidEmail(true);
  }
  }, [email])

  useEffect( () => {

    if (password.length<6) {
      setcheckValidPassword(false);
  }else{
    setcheckValidPassword(true);
  }
  }, [password])

  let data
if(checkValidEmail && checkValidPassword){
   data = {
    email : email,
    password : password,
  }
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
    
    if(!response.ok){
      setIsLoading(false);
      return new Error (responseData.message)
    } 

    localStorage.setItem('currentUserId', responseData.userId.id)
    auth.login(responseData.userId.id)
 
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
                      id="email" 
                      aria-describedby="emailHelp" 
                      placeholder="Enter Email Address..."
                      validators={[VALIDATOR_EMAIL()]} 
                      required 
                      style={ !checkValidEmail ? {border: 'solid red 1px'  } : {border: 'solid green 2px'  } }
                      />
                    </div>
                    <div className="form-group">
                      <input 
                      onChange={e =>{setPassword(e.target.value)}}
                      type="password"
                       className="form-control form-control-user" 
                       id="exampleInputPassword" 
                       placeholder="Password"
                       validators={[VALIDATOR_EMAIL()]}  
                       required
                       style={ !checkValidPassword ? {border: 'solid red 1px'  } : {border: 'solid green 2px'  } }
                       />
                    </div>
                    {/* <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input 
                        type="checkbox" 
                        className="custom-control-input" 
                        id="customCheck"/>
                        <label className="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div> */}

                    {isLoading && <center> <Spinner animation="border" variant="primary" /></center>}

                    <button type="submit"  className=" mt-3 btn btn-primary btn-user btn-block" disabled ={!checkValidEmail || !checkValidPassword}>
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