import React, { useState } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import "./dashboard.css";
import Header from "../Components/Header.jsx";
import SecureStore from "react-secure-storage";
import Body  from "./Dashboard Coponents/Body.jsx"

function Dashboard() {
  const user = SecureStore.getItem("userToken");
  return (
    <div className="main-div">
      <Sidebar />
      <div className="dashboard-div">
        <Body />
      </div>
      
    </div>
  );
}

export default Dashboard;
