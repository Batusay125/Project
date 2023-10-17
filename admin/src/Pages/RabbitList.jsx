import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Style.css";
import Table from "react-bootstrap/Table";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";

import appConfig from "../../config.json";
const BASE_URL = appConfig.apiBasePath;

function RabbitList() {
  const [rabbits, setRabbits] = useState([]);
  const [record, setRecord] = useState([]);

  const onRehome = (e, o) => {
    axios
      .put(BASE_URL + "/update-rehome/" + o.id, {
        rehome: "REHOME"
      })
      .then((res) => {
        window.location.reload();
      }).catch((err) => console.log(err));
  }

  const onUnRehome = (e, o) => {
    axios
      .put(BASE_URL + "/update-rehome/" + o.id, {
        rehome: null
      })
      .then((res) => {
        window.location.reload();
      }).catch((err) => console.log(err));
  }


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
        <div className="d-flex">
          <Link
            to="/add-rabbit"
            className="primary text-decoration-none addRabbit"
          >
            Add Rabbit
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr style={{ height: "60px" }}>
              <th>ID</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Weight</th>
              <th>Rehome</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((data, i) => (
              <tr key={i} style={{ height: "50px" }}>
                <td>{data.id}</td>
                <td>Img</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.sex}</td>
                <td>{data.weight}</td>
                <td>{data.rehome}</td>
                <td className="actions">
                  <Link
                    to={`/edit-rabbit/${data.id}`}
                    className="success text-decoration-none"
                  >
                    Edit
                  </Link>



                  {data.rehome === "REHOME" ? (
                    <button className="primary" onClick={e => onUnRehome(e, data)}>UnRehome</button>
                  ) : (
                    <button className="primary" onClick={e => onRehome(e, data)}>Rehome</button>

                  )}


                  <button
                    className="danger"
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
