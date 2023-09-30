import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import "./DropDown.css";

function NotificationDropDown() {
  return (
    <div className="noti-dropdown">
      <h4>Notifications</h4>
      <div className="noti-div">
        <IoNotificationsOutline className="icons noti-icon" />
        <p>Ivan Bengcolado likes your post</p>
      </div>
      <div className="noti-div">
        <IoNotificationsOutline className="icons noti-icon" />
        <p>Francis Bawag likes your post</p>
      </div>
      <div className="noti-div">
        <IoNotificationsOutline className="icons noti-icon" />
        <p>Cynthia Lorio likes your post</p>
      </div>
      <div className="noti-div">
        <IoNotificationsOutline className="icons noti-icon" />
        <p>John Lorio likes your post</p>
      </div>
    </div>
  );
}

export default NotificationDropDown;
