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
  const [rabbits, setRabbits] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/add-breed-pair")
      .then((res) => {
        setRabbits(res.data);
      })
      .catch((err) => console.log(err));
    console.log(rabbits);
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
              {rabbits.map((data, i) => (
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
              {rabbits.map((data, i) => (
                <option key={i} value={data.name}>
                  {data.name}
                </option>
              ))}
            </Form.Select>
            <span>or</span>
            <button className="btn btn-primary">Scan code</button>
          </div>
        </div>
        <div className="btn-div">
          <Link to="/breeding" className="btn btn-secondary cancel">
            Cancel
          </Link>
          <Link to="/breeding" className="btn btn-primary pair">
            Pair now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BreedPair;
