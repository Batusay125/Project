import React from "react";
import Navbar from "../components/Navbar.jsx";
import "./style.css";
import { Link } from "react-router-dom";
import Rabbit from "../images/rabbit-about.png";
import Footer from "../components/footer.jsx";

function About() {
  return (
    <div className="main-div">
      <Navbar />
      <div className="about-div">
        <h2>ABOUT OUR WEBSITE</h2>
        <br />
        <div className="content">
          <p>
            At e-Leporidae, we are driven by a simple but powerful mission: to{" "}
            <br />
            provide a safe and loving environment for rabbits in need of
            rehoming. <br />
            Our team is dedicated to promoting the well-being of these gentle{" "}
            <br />
            creatures and ensuring that they find their forever homes.
          </p>
        </div>
        <div className="content">
          <h2>Our Goal</h2>
          <p>
            <span>&#10687;</span> Find a happy home for rabbits <br />
            <span>&#10687;</span> Educate rabbit owners on responsible care
            <br />
            <span>&#10687;</span> Create a supportive rabbit-loving community
          </p>
        </div>
        <div className="content">
          <h2>Contact us</h2>
          <Link to="/contact">Click here!</Link>
        </div>
        <img src={Rabbit} alt="" className="rabbit-about" />
      </div>
      <Footer />
    </div>
  );
}

export default About;
