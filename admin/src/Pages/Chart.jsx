import React from "react";
import Sidebar from "../Components/Sidebar";
import "./Style.css";
import Header from "../Components/Header";

function Chart() {
  return (
    <div className="main-div">
      <Sidebar />
      <div className="chart-div">
        <Header />
        <br />
        <h1>Chart</h1>
      </div>
    </div>
  );
}

export default Chart;