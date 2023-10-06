import React, { useState } from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import { GiRabbit } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AuthContext } from "../App";
import { useContext } from "react";

function Sidebar() {
  const authContext = useContext(AuthContext);
  const navigateTo = useNavigate();

  function onLogout() {
    authContext.signOut();
    navigateTo("/");
  }

  return (
    <div className="sidebar">
      <Logo />
      <ul>
        <h4>Quick Menu</h4>
        <li>
          <AiOutlineDashboard className="icons" />
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <TbTruckDelivery className="icons" />
          <Link to="/delivery">Delivery</Link>
        </li>
        <li>
          <BsListCheck className="icons" />
          <Link to="/rabbitlist">Rabbit List</Link>
        </li>
        <br />
        <h4>Setting</h4>
        <li>
          <BsBarChartLine className="icons" />
          <Link to="/chart">Charts</Link>
        </li>
        <li>
          <GiRabbit className="icons" />
          <Link to="/breeding">Breeding</Link>
        </li>
        <li>
          <TiMessages className="icons" />
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <RiLogoutCircleLine className="icons" />
          {/* <Link to="/" className="logout">
            Logout
          </Link> */}
          <button onClick={onLogout} className="logout">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
