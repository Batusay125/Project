import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Style.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { toast } from "react-toastify";

function RabbitList() {
  const [rabbits, setRabbits] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/rabbitlist")
      .then((res) => setRabbits(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/deleterabbit/" + id);
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
        <Link to="/addRabbit" className="btn btn-primary addRabbit">
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
                <td>{data.rabbit_id}</td>
                <td>Img</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.sex}</td>
                <td>{data.weight}</td>
                <td>
                  <Link
                    to={`/edit/${data.rabbit_id}`}
                    className="btn btn-success action-btn"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-primary action-btn">Rehome</button>
                  <button
                    className="btn btn-danger action-btn"
                    onClick={(e) => handleDelete(data.rabbit_id)}
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
