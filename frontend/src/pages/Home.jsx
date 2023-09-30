import React from "react";
import Navbar from "../components/Navbar.jsx";
import "./style.css";
import RabbitHome from "../images/rabbit-home.jpg";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <div className="main-div">
      <Navbar />
      <div className="home-div">
        <img src={RabbitHome} alt="" />
        <div>Home</div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
