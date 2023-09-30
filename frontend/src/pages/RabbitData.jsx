import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AdoptForm from "./AdoptForm";
import axios from "axios";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import Rabbit from "../images/rabbit-contact.png";
import { GrClose } from "react-icons/gr";

function RabbitData() {
  const { id } = useParams();
  const [rabbit, setRabbit] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/rabbitdata/" + id)
      .then((res) => {
        console.log(res);
        setRabbit(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="rabbitData-container">
      <div>
        <Link to="/adopt">
          <GrClose className="close-btn" />
        </Link>
        <img src={Rabbit} alt="" />
        <h5>Hi, I'm {rabbit.name}. I am looking for a new home.</h5>
        <br />
        <h5>About me: </h5>
        <br />
        <div className="rabbitDetails">
          <div>
            <h6>RabbitID</h6>
          </div>
          <div>
            <h6>: {rabbit.rabbit_id}</h6>
          </div>
        </div>
        <div className="rabbitDetails">
          <div>
            <h6>Name</h6>
          </div>
          <div>
            <h6>: {rabbit.name}</h6>
          </div>
        </div>
        <div className="rabbitDetails">
          <div>
            <h6>Age</h6>
          </div>
          <div>
            <h6>: {rabbit.age} month/s</h6>
          </div>
        </div>
        <div className="rabbitDetails">
          <div>
            <h6>Sex</h6>
          </div>
          <div>
            <h6>: {rabbit.sex}</h6>
          </div>
        </div>
        <div className="rabbitDetails">
          <div>
            <h6>Weight</h6>
          </div>
          <div>
            <h6>: {rabbit.weight} klg</h6>
          </div>
        </div>
        <div className="rabbitDetails">
          <div>
            <h6>Breed</h6>
          </div>
          <div>
            <h6>: N/A</h6>
          </div>
        </div>
      </div>
      <Link to="/form" type="" className="btn btn-primary mt-4">
        Apply for adoption
      </Link>
    </div>
  );
}

export default RabbitData;
