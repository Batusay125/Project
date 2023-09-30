import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Style.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { toast } from "react-toastify";

import appConfig from '../../config.json';
const BASE_URL = appConfig.apiBasePath; //e.g "http://localhost:8080/api"

function RabbitList() {
  const [rabbits, setRabbits] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL +"/rabbits")
      .then((res) => setRabbits(res.data))
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

  return (
    <div className="main-div">
      <Sidebar />
      <div className="rabbitList">
        <Header />
        <br />
        <h1>Rabbit List</h1>
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
            {rabbits.map((data, i) => (
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
                    Edit
                  </Link>
                  <button className="btn btn-primary action-btn">Rehome</button>
                  <button
                    className="btn btn-danger action-btn"
                    onClick={(e) => handleDelete(data.id)}
                  >
                    Delete
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