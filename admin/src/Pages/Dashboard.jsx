import React from "react";
import Sidebar from "../Components/Sidebar.jsx";
import "./Style.css";
import Header from "../Components/Header.jsx";
import Activity from "./Activity.jsx";

function Dashboard() {
  return (
    <div className="main-div">
      <Sidebar />
      <div className="dashboard-div">
        <Header />
        <br />
        <h1>Dashboard</h1>
        <div>{/* <Activity /> */}</div>
      </div>
    </div>
  );
}

export default Dashboard;
