import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import Validation from "./SignupValidation.jsx";
import Person from "../icons/Person.png";
import Email from "../icons/email.png";
import Password from "../icons/password.png";
import { toast } from "react-toastify";
import axios from "axios";
import LoginRabbit from "../images/LoginRabbit.jpg";

function Login() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    Password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          toast.success("Account created");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="LoginSignup-div">
      <div className="bg-image "></div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h4 className="text">Create your account</h4>
        <div className="inputs">
          <div className="input">
            <img src={Person} alt="" />
            <input
              type="text"
              onChange={handleInput}
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="input">
            <img src={Email} alt="" />
            <input
              type="text"
              onChange={handleInput}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="input">
            <img src={Password} alt="" />
            <input
              type="password"
              onChange={handleInput}
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="login-link">
          Already have an account? <Link to="/">Login here</Link>
        </div>
        <button type="submit" className="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Login;
