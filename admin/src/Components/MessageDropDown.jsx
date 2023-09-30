import React, { useState } from "react";
import "./DropDown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch } from "react-icons/bs";

function MessageDropDown() {
  return (
    <div className="mess-dropdown">
      <h4>Messages</h4>
      <div className="search-div">
        <input type="text" placeholder="Search" className="form-control" />
        <BsSearch />
      </div>
      <div className="chat-div">
        <img src="" alt="" className="profile" />
        <p>Ivan Bengcolado</p>
      </div>
      <div className="chat-div">
        <img src="" alt="" className="profile" />
        <p>Francis Bawag</p>
      </div>
      <div className="chat-div">
        <img src="" alt="" className="profile" />
        <p>Cynthia Lorio</p>
      </div>
      <div className="chat-div">
        <img src="" alt="" className="profile" />
        <p>John Lorio</p>
      </div>
    </div>
  );
}

export default MessageDropDown;
