import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Style.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";

import appConfig from "../../config.json";
const BASE_URL = appConfig.apiBasePath; //e.g "http://localhost:8080/api"

function RabbitList() {
  const [rabbits, setRabbits] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/rabbits")
      .then((res) => {
        setRabbits(res.data);
        setRecord(res.data);
      })
      .catch((err) => console.log(err));
    console.log(rabbits);
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(BASE_URL + "/delete-rabbit/" + id);
      window.location.reload();
      toast.success("Successfully deleted!");
    } catch (err) {
      console.log(err);
    }
  };

  // Search rabbit filter
  const Filter = (e) => {
    setRecord(
      rabbits.filter((f) => f.name.toLowerCase().includes(e.target.value))
    );
  };

  return (
    <div className="main-div">
      <Sidebar />
      <div className="rabbitList">
        <Header />
        <br />
        <h1>Rabbit List</h1>
        <br />
        <div className="search-filter-div">
          <input
            type="text"
            name=""
            className="form-control"
            placeholder="Search rabbit by name"
            onChange={Filter}
          />
        </div>
        <br />
        <Link to="/add-rabbit" className="btn btn-primary addRabbit">
          Add Rabbit
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Weight</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>Img</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.sex}</td>
                <td>{data.weight}</td>
                <td>
                  <Link
                    to={`/edit-rabbit/${data.id}`}
                    className="btn btn-success action-btn"
                  >
                    <FiEdit />
                  </Link>
                  <button className="btn btn-primary action-btn">
                    <BsSend />
                  </button>
                  <button
                    className="btn btn-danger action-btn"
                    onClick={(e) => handleDelete(data.id)}
                  >
                    <RiDeleteBin7Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RabbitList;
