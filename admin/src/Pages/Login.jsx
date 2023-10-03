import React, { useEffect, useState, useContext, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

// import video from "./LoginAsset/video.mp4";
import rabbit from "./LoginAsset/rabbit.png";

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import Axios from "axios";
import * as UserController from "../controller/UserController.jsx";
import { AuthContext } from "../App";

import appConfig from "../../config.json";
const BASE_URL = appConfig.apiBasePath; //e.g "http://localhost:8080/api";
import SecureStore from "react-secure-storage";

function Login() {
  const authContext = useContext(AuthContext);

  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigateTo = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");

  function loginUser(e) {
    e.preventDefault();

    Axios.post(BASE_URL + "/login", {
      LoginUserName: loginUserName,
      LoginPassowrd: loginPassword,
    }).then((response) => {
      const user = response.data[0];
      if (user.username === loginUserName && user.password === loginPassword) {
        SecureStore.setItem("userToken", user);
        authContext.signIn(user);
        navigateTo("/dashboard"); // if the credebntial match in db
      } else {
        navigateTo("/"); // navigate to login page
        setLoginStatus("Credential Dont Exist ");
      }
    });
  }

  //   useEffect(()=>{
  //       if(loginStatus !== '') {
  //           setstatusHolder('showMessage')//show vessage
  //           setTimeout(()=>{
  //               setstatusHolder('message')//hide mofo message
  //           }, 4000);
  //       }
  //   }, [loginStatus])

  const onSubmit = () => {};

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="welcome-div">
          <h2>
            <span className="welcome-span">Welcome back to</span>
            <br />
            E-LEPORIDAE
          </h2>
        </div>
        <form className="form grid" onSubmit={onSubmit}>
          <h2 className="login-title">Administrator</h2>
          <div className="inputDiv">
            <label htmlFor="username">Email</label>
            <div className="input flex">
              <FaUserShield className="icons" />
              <input
                type="text"
                id="username"
                placeholder="Enter your email"
                onChange={(event) => {
                  setLoginUserName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="input flex">
              <BsFillShieldLockFill className="icons" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn flex login-btn"
            onClick={loginUser}
          >
            <span>Login </span>
            <AiOutlineSwapRight className="icon" />
          </button>
          <div>
            Forgot password? <Link to="/createPass">Reset password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Sign up</Link>
          </div>
          <div>
            <Link>Login as guest</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
