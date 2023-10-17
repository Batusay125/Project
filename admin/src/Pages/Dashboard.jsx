import React, { useState } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import "./dashboard.css";
import Header from "../Components/Header.jsx";
import SecureStore from "react-secure-storage";
import { useEffect } from "react";
import axios from "axios";

import appConfig from "../../config.json";
const BASE_URL = appConfig.apiBasePath;

function Dashboard() {
  const user = SecureStore.getItem("userToken");

  const [rabbitCount, setRabbitCount] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    axios
      .get("/countRabbits")
      .then((response) => {
        setRabbitCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
      });
    
    //see dashboard.js
    axios
      .get(BASE_URL +"/pending-adoption")
      .then((response) => {
        setPending(response.data[0].pending);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div className="main-div">
      <Sidebar />
      <div className="dashboard-div">
        <Header />
        <br />
        <h1>Dashboard</h1>
        {/* <h1>Welcome {user !== null ? user.name : ""}</h1> */}
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
              height: "180px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Users</h4>
            <h1>129</h1>
          </div>
          <div
            className="dashboard-card bg-success"
            style={{
              height: "180px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Total Request</h4>
            <h1>100</h1>
          </div>
          <div
            className="dashboard-card bg-warning"
            style={{
              height: "180px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Pending Request</h4>
            <h1>{pending}</h1>
          </div>

          <div
            className="dashboard-card bg-danger"
            style={{
              height: "180px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Breeding Pair</h4>
            <h1>20</h1>
          </div>
          <div
            className="dashboard-card bg-info"
            style={{
              height: "180px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Rabbits</h4>
            <h1>150</h1>
          </div>
          <div
            className="dashboard-card bg-primary"
            style={{
              height: "180px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Active Users</h4>
            <h1>250</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
