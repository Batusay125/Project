import React from "react";
import Sidebar from "../Components/Sidebar";
import "./Style.css";
import Header from "../Components/Header";

function Delivery() {
  return (
    <div className="main-div">
      <Sidebar />
      <div className="delivery-div">
        <Header />
        <br />
        <h1>Delivery</h1>

        
      </div>
    </div>
  );
}

export default Delivery;
