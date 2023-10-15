import React, { useEffect, useState } from "react";
import "./Style.css";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import appConfig from "../../config.json";
import Scanner from "./Scanner"
import { Html5QrcodeScanner } from "html5-qrcode";
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

  const [scanResult, setScanResult] = useState();
  const [scanResult1, setScanResult1] = useState();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    const scanner1 = new Html5QrcodeScanner("reader1", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner1.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult1(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="main-div">
      <Sidebar />
      <div className="breed-pair-div">
        <Header />
        <br />
        <h1>Add Breeding Pair</h1>
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
            {scanResult ? <div>Result: {scanResult}</div> : <div id="reader"></div>}
            <div>Result: {scanResult}</div> 
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
            {scanResult1 ? <div>Result: {scanResult1}</div> : <div id="reader1"></div>}

            <div className="result">{scanResult1}</div>
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
