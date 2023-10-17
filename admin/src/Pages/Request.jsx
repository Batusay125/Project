import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import "./Style.css";
import { Table } from "react-bootstrap";
import axios from "axios";
import appConfig from "../../config.json";
import { Link } from "react-router-dom";
import ReviewRequest from "./ReviewRequest";

const BASE_URL = appConfig.apiBasePath;
const onApprove = (e, o) =>{
  axios
  .put(BASE_URL + "/approve-adoption/" + o.id)
  .then((res) => {
    window.location.reload();
  }).catch((err) => console.log(err));
}

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
        <h1>Request</h1>
        <Table striped bordered hover>
          <thead >
            <tr style={{height: "60px"}}>
              <th>Application Id</th>
              <th>Rabbit Id</th>
              <th>Adopter Name</th>
              <th>Adopter Address</th>
              <th>Application Date</th>
              <th>Reason to adopt</th>
              <th>Tran. Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {values.map((data, i) => (
              <tr key={i} style={{height: "50px"}}>
                <td>{data.id}</td>
                <td>{data.rabbit_id}</td>
                <td>{data.fullname}</td>
                <td>
                  {data.barangay}, {data.city}
                </td>
                <td>{data.adoption_date}</td>
                <td>{data.reason_for_adoption}</td>
                <td>{data.transaction_status}</td>
                <td className="actions">
                  <ReviewRequest data={data}/>
                  <button className="success" onClick={e => onApprove(e, data)}>Approve</button>
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
