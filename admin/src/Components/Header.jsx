import React, { useState } from "react";
import "./Header.css";
import { TiMessages } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import MessageDropDown from "./MessageDropDown";
import NotificationDropDown from "./NotificationDropDown.jsx";

function Header() {
  const [messDropdown, setmessDropdown] = useState(false);
  const [notiDropdown, setNotiDropdown] = useState(false);
  return (
    <div className="">
      <div className="header-div">
        <div className="notifications">
          <TiMessages
            className="icons"
            onClick={() => setmessDropdown((prev) => !prev)}
          />
          <IoNotificationsOutline
            className="icons"
            onClick={() => setNotiDropdown((prev) => !prev)}
          />
          <MdOutlineAccountCircle className="icons" />
          {messDropdown && <MessageDropDown />}
          {notiDropdown && <NotificationDropDown />}
        </div>
      </div>
    </div>
  );
}

export default Header;
