import React from "react";
import Sidebar from "../Components/Sidebar.jsx";
import "./Style.css";
import Header from "../Components/Header.jsx";
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import * as UserController from '../controller/UserController.jsx'
import { AuthContext } from "../App.jsx";



function Dashboard() {
  
  // const signIn = useContext(AuthContext);
  const [signIn, setSignIn] = useContext(AuthContext);
  console.log(signIn);

  return (
   
    <div className="main-div">
      
      <Sidebar />
      <div className="dashboard-div">
        <Header />
        <br />
        <h1>Dashboard</h1>
        <h1>Welcome {signIn != null ? signIn.name : ""}</h1>
        <div>{/* <Activity /> */}</div>
      </div>
    </div>
  );
}

export default Dashboard;
