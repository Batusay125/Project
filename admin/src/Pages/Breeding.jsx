import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import "./Style.css";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineDatabase } from "react-icons/ai";
import axios from "axios";
import appConfig from "../../config.json";
import BreedingDetails from "./BreedingDetails";
const BASE_URL = appConfig.apiBasePath;

function Breeding() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/breeding")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(BASE_URL + "/cancel_breeding/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main-div">
      <Sidebar />
      <div className="breeding-div">
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
          <thead >
            <tr style={{height: "60px"}}>
              <th>Pair Id</th>
              <th>Buck</th>
              <th>Doe</th>
              <th>Pairing date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr key={i} style={{height: "50px"}}>
                <td>{data.id}</td>
                <td>{data.buck_id}</td>
                <td>{data.doe_id}</td>
                <td>{data.pairing_date}</td>
                <td className="actions">
                  <BreedingDetails data={data}/>
                  <button className="danger" onClick={(e) => handleDelete(data.id)}>Cancel</button>
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
