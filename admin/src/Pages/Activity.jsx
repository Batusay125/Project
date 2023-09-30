import React from "react";
import "./Style.css";
import { BsArrowRightShort } from "react-icons/bs";
import user from "./Assets/tatang.png";
import user1 from "./Assets/user1.png";
import user2 from "./Assets/user2.png";
import user3 from "./Assets/user3.png";

const Activity = () => {
  return (
    <div className="activity-div">
      <div className="">
        <h4>Recent Activity</h4>
        <button className="btn">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="user-container">
        <div className="user">
          <img src={user} />
          <p>Ivan Bengcolado</p>
          <small>Request</small>
          <span>5 min ago</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
