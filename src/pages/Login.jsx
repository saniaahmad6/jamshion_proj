import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import "./Login.css"
import { Divider } from "@mui/material";
const Login = () => {
  return (
    <>
      
      <div className="container my-3 py-3">
        <h3 className="text-left">LOGIN</h3>
        <hr />
        <div class="row my-4 h-100">
          <div className="">
            <form>
              <div class="my-3">
                {/* <label for="display-4">Email address</label> */}
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Email ID or Mobile Number"
                  // onClick={(e)=> {e.target.blur()}}
                />
              </div>
              <div class="my-3">
                {/* <label for="floatingPassword display-4">Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  // onClick={(e)=> {e.target.blur()}}
                />
              </div>
              <div className="my-2" >
                <p className="Login-question">New to Jamshion? <Link to="/register" className="Login-link text-decoration-underline  ">Create account</Link> </p>
              </div>
              <div className="my-2">
                <p className="Login-question">Forgot Password? <Link to="/register" className="Login-link text-decoration-underline ">Reset Password</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto Login-button" type="submit" >
                  SIGN IN
                </button>
              </div>
              

            </form>
            <hr/>
            {/* <div className="Login-auto-container">
              <div className="mybtns"> */}
              <div className="google-btn " style={{margin :"auto"}}>
                <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
              </div>
              <br/>
              <button className="loginBtn loginBtn--facebook " style={{margin :"0 0 0 12%"}}>
                Login with Facebook
              </button>
              {/* </div>
              </div> */}
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Login;


// col-md-4 col-lg-4 col-sm-8 mx-auto