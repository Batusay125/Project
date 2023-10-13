import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dropdown.css";
import { AiOutlineForm } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";

function DropdownMenu() {
  const navigate = useState();

  const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    // Redirect to the login page or any other desired route
    navigate("/login");
  };
  return (
    <div className="dropdown">
      <ul className="">
        <Link to="/myapplication">
          <AiOutlineForm className="icon icons" />
          My application
        </Link>
        <Link to="/" onClick={handleLogout}>
          <BiLogOut className="icon icons" />
          Logout
        </Link>
      </ul>
    </div>
  );
}

export default DropdownMenu;
