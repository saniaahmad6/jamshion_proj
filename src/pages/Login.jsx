import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import "./Login.css"
import { Divider } from "@mui/material";
// import { useEffect } from "react";
const Login = ({anchor,toggleDrawer}) => {
  const [login, setLogin] = React.useState(true);
  function handleClick (){
    setLogin(!login);
  }
  
  return (
    <>
      
      <div className="container my-3 py-3">
        {login ? <h3 className="text-left">LOGIN</h3> : <h3 className="text-left">REGISTER</h3>}
        <hr />
        <div class="row my-4 h-100">
          <div className="">
            <form>
            {login===false ? (
              <div>
              <div class="my-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="First Name"
                  
                />
              </div>
              <div class="my-3">
                
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Last Name"
                  
                />
              </div></div>
              ) : (null)}
              <div class="my-3">
                
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Email ID or Mobile Number"
                  
                />
              </div>
              <div class="my-3">
                
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                 
                />
              </div>
              <div className="my-2" >
                {login ? 
                (<p className="Login-question" style={{textAlign : "justify" ,padding :"0 2% 0 2%"}}>New to Jamshion? <Link to="" onClick={handleClick} className="Login-link text-decoration-underline  ">Create account</Link> </p>) 
                : 
                (<p className="Login-question" style={{textAlign : "justify" ,padding :"0 2% 0 2%"}}>Already Registered? <Link to="" onClick={handleClick} className="Login-link text-decoration-underline  ">Login Here</Link> </p>) 
                }
                
              </div>
              {login ? (<div className="my-2">
                <p className="Login-question" style={{textAlign : "justify" ,padding :"0 2% 0 2%"}}>Forgot Password? <Link to="/" className="Login-link text-decoration-underline ">Reset Password</Link> </p>
              </div>) : (null)}
              
              {login===false  ? (<p className="Login-question" style={{textAlign : "justify" ,padding :"0 2% 0 2%"}}>We care deeply about you and want to ensure your safety, risk-free purchasing, and a fantastic time while shopping with us. Find out more in our privacy policy.</p>) 
              : (null)}
              {login ? (
                <div className="text-center">
                <button class="my-2 mx-auto Login-button" type="submit" >
                  SIGN IN
                </button>
                </div>
              ) : (
                <div className="text-center">
                <button class="my-2 mx-auto Login-button" type="submit" >
                  REGISTER
                </button>
                </div>
              )}



              
              

            </form>
            <hr/>
            
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
              
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Login;


