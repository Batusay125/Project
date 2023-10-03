import React, { useState } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import "./Style.css";
import Header from "../Components/Header.jsx";
import SecureStore from "react-secure-storage";


function Dashboard() {
  const user = SecureStore.getItem("userToken");
  return (

    <div className="main-div">
      <Sidebar />
      <div className="dashboard-div">
        <Header />
        <br />
        <h1>Dashboard</h1>
        <h1>Welcome {user !== null ? user.name : ""}</h1>
        <div>{/* <Activity /> */}</div>
      </div>
    </div>
  );
}

export default Dashboard;
