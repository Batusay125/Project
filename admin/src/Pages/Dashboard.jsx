import React, { useState } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import "./Style.css";
import Header from "../Components/Header.jsx";
import SecureStore from "react-secure-storage";
import Card from "react-bootstrap/Card";

function Dashboard() {
  const user = SecureStore.getItem("userToken");
  return (
    <div className="main-div">
      <Sidebar />
      <div className="dashboard-div">
        <Header />
        <br />
        <h1>Dashboard</h1>

        <div style={{ display: "inline-flex" }}>
          <div style={{ width: "200px", height: "200px", background: "gray", margin: "20px", alignContent: "center" }}>
            <h4>Pending Request</h4>
            <h1>3</h1>
          </div>

          <div style={{ width: "200px", height: "200px", background: "gray", margin: "20px" }}>
            <h4>Complete Request</h4>
            <h1>10</h1>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Dashboard;
