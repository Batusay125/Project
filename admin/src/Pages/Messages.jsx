import React from "react";
import Sidebar from "../Components/Sidebar";
import "./Style.css";
import Header from "../Components/Header";

function Messages() {
  return (
    <div className="main-div">
      <Sidebar />
      <div className="message-div">
        <Header />
        <br />
        <h1>Messages</h1>
      </div>
    </div>
  );
}

export default Messages;
