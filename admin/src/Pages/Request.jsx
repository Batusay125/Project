import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import "./Style.css";
import Header from "../Components/Header";
import { Table } from "react-bootstrap";
import axios from "axios";

import appConfig from "../../config.json";
const BASE_URL = appConfig.apiBasePath;

function Request() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "/adoptions")
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main-div">
      <Sidebar />
      <div className="request-div">
        <Header />
        <br />
        <h1>Request</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Application Id</th>
              <th>Rabbit Id</th>
              <th>Adopter Name</th>
              <th>Adopter Address</th>
              <th>Application Date</th>
              <th>Reason to adopt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {values.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.rabbit_id}</td>
                <td>{data.fullname}</td>
                <td>
                  {data.barangay}, {data.city}
                </td>
                <td>{data.adoption_date}</td>
                <td>{data.reason_for_adoption}</td>
                <td className="actions">
                  <button className="secondary">Review</button>
                  <button className="success">Approve</button>
                  <button className="danger">Decline</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Request;
