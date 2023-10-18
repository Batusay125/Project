import React, { useState } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import "./dashboard.css";
import SecureStore from "react-secure-storage";
import { useEffect } from "react";
import axios from "axios";

import appConfig from "../../config.json";
const BASE_URL = appConfig.apiBasePath;

function Dashboard() {
  const user = SecureStore.getItem("userToken");

  const [userCount, setUserCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [rabbitCount, setRabbitCount] = useState(0);
  const [pending, setPending] = useState(0);
  const [pairCount, setPairCount] = useState(0);
  const [approveCount, setApproveRequest] = useState(0);

  useEffect(() => {
    axios
      .get(BASE_URL + "/userCount")
      .then((response) => {
        setUserCount(response.data[0].userCount);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(BASE_URL + "/requestCount")
      .then((response) => {
        setRequestCount(response.data[0].requestCount);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(BASE_URL + "/countRabbits")
      .then((response) => {
        setRabbitCount(response.data[0].rabbitCount);
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

    axios
      .get(BASE_URL +"/pairCount")
      .then((response) => {
        setPairCount(response.data[0].pairCount);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(BASE_URL +"/approveCount")
      .then((response) => {
        setApproveRequest(response.data[0].approveCount);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(BASE_URL +"/pairCount")
      .then((response) => {
        setPairCount(response.data[0].pairCount);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div className="main-div">
      <Sidebar />
      <div className="dashboard-div">
        <h1>Dashboard</h1>
        <br/>
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
            <h1>{userCount}</h1>
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
            <h1>{requestCount}</h1>
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
            <h1>{pairCount}</h1>
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
            <h1>{rabbitCount}</h1>
          </div>
          <div
            className="dashboard-card bg-primary"
            style={{
              height: "180px",
              borderRadius: "5px",
              alignContent: "center",
            }}
          >
            <h4>Approved Request</h4>
            <h1>{approveCount}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
