import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "./Style.css";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import axios from "axios";

import appConfig from "../../config.json";
const BASE_URL = appConfig.apiBasePath;

function Breeding() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/breeding")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main-div">
      <Sidebar />
      <div className="breeding-div">
        <Header />
        <br />
        <h1>Breeding Pair List</h1>
        <br />
        <div className="d-flex">
          <Link
            to="/add-breed-pair"
            className="success breed-btn text-decoration-none"
          >
            Add Pair
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Pair Id</th>
              <th>Buck</th>
              <th>Doe</th>
              <th>Pairing date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.buck_id}</td>
                <td>{data.doe_id}</td>
                <td>{data.pairing_date}</td>
                <td className="actions">
                  <Link
                    to="/breed-data"
                    className="secondary text-decoration-none"
                  >
                    View
                  </Link>
                  <button className="danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Breeding;
