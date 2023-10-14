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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            width: "100%",
            gap: "20px",
          }}
        >
          <div
            className="dashboard-card bg-primary"
            style={{
              height: "160px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Users</h4>
            <h1>250</h1>
          </div>
          <div
            className="dashboard-card bg-success"
            style={{
              height: "160px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Adoption Request</h4>
            <h1>100</h1>
          </div>
          <div
            className="dashboard-card bg-warning"
            style={{
              height: "160px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Pending Request</h4>
            <h1>150</h1>
          </div>
          <div
            className="dashboard-card bg-danger"
            style={{
              height: "160px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Breeding</h4>
            <h1>100</h1>
          </div>
          <div
            className="dashboard-card bg-info"
            style={{
              height: "160px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Rabbits</h4>
            <h1>500</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
