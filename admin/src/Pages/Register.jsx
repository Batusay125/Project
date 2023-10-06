import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Register = () => {
  //holds the input
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  //onclick mf
  const createUser = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3002/register", {
      Email: email,
      UserName: userName,
      Password: password,
    }).then(() => {
      //register page to login page
      navigateTo("/");

      //clear the fields
      setEmail("");
      setUserName("");
    });
  };

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
        <form className="form grid">
          <h2 className="login-title">Administrator</h2>
          <div className="inputDiv">
            <label htmlFor="username">Name</label>
            <div className="input flex">
              <FaUserShield className="icons" />
              <input
                type="text"
                id="username"
                autoComplete="on"
                placeholder="Enter your name"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <div className="input flex">
              <MdOutlineAlternateEmail className="icons" />
              <input
                type="email"
                id="email"
                autoComplete="on"
                placeholder="Enter your email"
                onChange={(event) => {
                  setEmail(event.target.value);
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
                autoComplete="on"
                placeholder="Enter your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn register-btn flex"
            onClick={createUser}
          >
            <span>Sign up</span>
            <AiOutlineSwapRight className="icon" />
          </button>
          <div>
            Already have an account? <Link to="/">Login</Link>
          </div>
          <div>
            <Link>Sign up as guest</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
