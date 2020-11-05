import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"
import {
   VALIDATOR_EMAIL,
   VALIDATOR_MAXLENGTH
  } from "../Utils/Validators"
  import {AuthContext} from "../Shared/context/auth-context"
  import Spinner from 'react-bootstrap/Spinner'

  const Login = () => {
  
  let  baseURL = "http://localhost:4000/api/user/signup"

  const auth= useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [fullname , setFullname ]= useState('')
  const [mobile , setMobile ]= useState('')
  const [email , setEmail ]= useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loginButton, setLoginButton] = useState ( ()=> {
    
  })

  const data = { 
    name: fullname,
    mobile: mobile,
    email : email,
    password : password,

  }
 
 const signupHandler = async e => {
  e.preventDefault();
  if(confirm !== password){

  }
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
            setIsLoading(true);
            auth.login()
 
  }catch(error){
    setIsLoading(false);
    setError(error.message || 'Something went wring, please try again');
  }
 } 


    return( 
<React.Fragment>

  <div className="row justify-content-center">

      <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-primary mb-4 display-4">Register</h1>
                  </div>
                  <form className ="user" onSubmit={signupHandler}>
                    <div className="form-group">
                      <input 
                      onChange={e =>{setMobile(e.target.value)}}
                      type="text" 
                      className="form-control form-control-user" 
                      id="mobile" 
                      aria-describedby="" 
                      placeholder="Enter Mobile Number..."
                      validators={[VALIDATOR_MAXLENGTH(10)]} 
                      required />
                    </div>
                    <div className="form-group">
                      <input 
                      onChange={e =>{setEmail(e.target.value)}}
                      type="email" 
                      className="form-control form-control-user" 
                      id="exampleInputEmail" 
                      aria-describedby="emailHelp" 
                      placeholder="Enter Email Address..."
                      validators={[VALIDATOR_EMAIL()]} 
                      required />
                    </div>
                    <div className="form-group"> 
                      <input 
                      onChange={e =>{setFullname(e.target.value)}}
                      type="text" 
                      className="form-control form-control-user" 
                      id="fullname" 
                      aria-describedby="" 
                      placeholder="Enter Fullname..."
                      required />
                    </div>
                    <div className="form-group">
                      <input 
                      onChange={e =>{setPassword(e.target.value)}}
                      type="password"
                       className="form-control form-control-user" 
                       id="password" 
                       placeholder="Enter Password"
                       required/>
                    </div>
                    <div className="form-group">
                      <input 
                      onChange={e =>{setConfirm(e.target.value)}}
                      type="password"
                       className="form-control form-control-user" 
                       id="confirm" 
                       placeholder="Confirm Password"
                       required/>
                    </div>
                    <div className="form-group">
                    </div>
                    {isLoading && <center> <Spinner animation="border" variant="info" /></center>}
                    
                    <button type="submit"  className="mt-3 btn btn-info btn-user btn-block" >
                      Sign up
                    </button>
                  </form>
                  <hr/>
                  <div className="text-center">
                    <Link to="/login" className="small ">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    </React.Fragment>


    )
}
export default Login