import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import Validation from "./LoginValidation.jsx";
import Email from "../icons/email.png";
import Password from "../icons/password.png";
import axios from "axios";
import { toast } from "react-toastify";
import LoginRabbit from "../images/LoginRabbit.jpg";
function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/", values)
        .then((res) => {
          if (res.data === "Success") {
            toast.success("Login successfully");
            navigate("/adopt");
          } else {
            toast.error("Incorrect Email or Password");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="LoginSignup-div">
      <div className="bg-image "></div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h4 className="text">
          Welcome back <br /> to e-Leporidae
        </h4>
        <div className="inputs">
          <div className="input">
            <img src={Email} alt="" />
            <input
              type="text"
              name="email"
              onChange={handleInput}
              placeholder="Email"
            />
          </div>
          <div className="input">
            <img src={Password} alt="" />
            <input
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="forgot-password">
          Forgot password? <Link>Reset password</Link>
        </div>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </div>
        <button type="submit" className="submit login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
