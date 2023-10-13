import React, { useEffect, useState } from "react";
import "./Style.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import appConfig from "../../config.json";
import axios from "axios";
const BASE_URL = appConfig.apiBasePath;

function BreedPair() {
  const [maleRabbits, setMaleRabbits] = useState([]);
  const [femaleRabbits, setFemaleRabbits] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/rabbit/male")
      .then((res) => {
        setMaleRabbits(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL + "/rabbit/female")
      .then((res) => {
        setFemaleRabbits(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-div">
      <Sidebar />
      <div className="breed-pair-div">
        <Header />
        <br />
        <h1>Add Rabbit Pair</h1>
        <br />
        <div className="breed-ground">
          <div className="ground">
            Male
            <Form.Select aria-label="Default select example">
              <option value="" hidden>
                Select rabbit
              </option>
              {maleRabbits.map((data, i) => (
                <option key={i} value={data.name}>
                  {data.name}
                </option>
              ))}
            </Form.Select>
            <span>or</span>
            <button className="btn btn-primary">Scan code</button>
          </div>
          <div className="center-ground">Matching result</div>
          <div className="ground">
            Female
            <Form.Select aria-label="Default select example">
              <option value="" hidden>
                Select rabbit
              </option>
              {femaleRabbits.map((data, i) => (
                <option key={i} value={data.name}>
                  {data.name}
                </option>
              ))}
            </Form.Select>
            <span>or</span>
            <button className="btn btn-primary">Scan code</button>
          </div>
        </div>
        <br />
        <br />
        <div className="actions">
          <Link to="/breeding" className="secondary text-decoration-none">
            Cancel
          </Link>
          <Link to="/breeding" className="primary text-decoration-none">
            Pair now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BreedPair;
