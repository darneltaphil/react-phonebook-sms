import React, {useState, useContext} from "react"
import { Link } from "react-router-dom"
import {
   VALIDATOR_EMAIL,
    VALIDATOR_MIN 
  } from "../Utils/Validators"
  import {AuthContext} from "../Shared/context/auth-context"

const Login = () => {
  const auth= useContext(AuthContext);

  const [email , setEmail ]= useState('')
  const [password, setPassword] = useState('')


 const authSubmitHandler = e => {
  e.preventDefault();
   auth.login();   
   console.log(auth.login()) 
 }

    return( 

<div className="bg-gradient-primary">

  <div className="container">

    <div className="row justify-content-center">

      <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form className="user" onSubmit={authSubmitHandler}>
                    <div className="form-group">
                      <input 
                      type="email" 
                      className="form-control form-control-user" 
                      id="exampleInputEmail" 
                      aria-describedby="emailHelp" 
                      placeholder="Enter Email Address..."
                      validators={[VALIDATOR_EMAIL()]} />
                    </div>
                    <div className="form-group">
                      <input 
                      type="password"
                       className="form-control form-control-user" 
                       id="exampleInputPassword" 
                       placeholder="Password"
                       validators={[VALIDATOR_EMAIL()]} />
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
                      Login
                    </button>
                    <hr/>
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </a>
                  </form>
                  <hr/>
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <Link to="/signup" className="small" href="register.html">Create an Account!</Link>
                  </div>
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