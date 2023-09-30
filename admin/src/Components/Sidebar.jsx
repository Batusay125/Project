import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import { GiRabbit } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

function Sidebar() {
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
          <Link to="">Breed</Link>
        </li>
        <li>
          <TiContacts className="icons" />
          <Link to="">Contact</Link>
        </li>
        <li>
          <FaRegMoneyBillAlt className="icons" />
          <Link to="">Billing</Link>
        </li>
        <li>
          <RiLogoutCircleLine className="icons" />
          <Link to="" className="logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
