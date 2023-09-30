import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dropdown.css";
import { AiOutlineForm } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";

function DropdownMenu() {
  const navigate = useState();
  const handleLogout = (e) => {
    // localStorage.removeItem("token");
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="dropdown">
      <ul className="">
        <Link to="">
          <ImProfile className="icon icons" />
          Profile
        </Link>
        <Link to="/myapplication">
          <AiOutlineForm className="icon icons" />
          My application
        </Link>
        <Link to="/">
          <BiLogOut className="icon icons" />
          Logout
        </Link>
      </ul>
    </div>
  );
}

export default DropdownMenu;
