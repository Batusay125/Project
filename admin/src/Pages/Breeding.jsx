import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "./Style.css";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";

function Breeding() {
  return (
    <div className="main-div">
      <Sidebar />
      <div className="breeding-div">
        <Header />
        <br />
        <h1>Breeding Pair List</h1>
        <br />
        <Link to="/add-breed-pair" className="btn btn-success breed-btn">
          Breed Rabbit
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Pair_Id</th>
              <th>Buck</th>
              <th>Doe</th>
              <th>Mating date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Totoro</td>
              <td>Girly</td>
              <td>10/06/2023</td>
              <td>
                <Link to="/breed-data" className="btn btn-primary action-btn">
                  <AiOutlineDatabase className="view" />
                </Link>
                <button className="btn btn-danger action-btn">
                  <RiDeleteBin7Line />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Breeding;
