import React from "react";
import "./Style.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function BreedingData() {
  return (
    <div className="main-div">
      <Sidebar />
      <div className="breed-data-div">
        <Header />
        <br />
        <h1>Breeding Data</h1>
        <br />
        <div className="breed-data">
          <div>
            <p>Pair_Id</p>
            <p>Buck</p>
            <p>Doe</p>
            <p>Pairing_Date</p>
            <p>Expected_Due_Date</p>
            <p>Start_Date</p>
            <p>End_Date</p>
          </div>
          <div>
            <p>: 001</p>
            <p>: Totoro</p>
            <p>: Girly</p>
            <p>: 10-06-2023</p>
            <p>: 11-06-2023</p>
            <p>: 10-06-2023</p>
            <p>: N/A</p>
          </div>
        </div>
        <Link to="/breeding" className="btn btn-secondary">
          Back
        </Link>
      </div>
    </div>
  );
}

export default BreedingData;
