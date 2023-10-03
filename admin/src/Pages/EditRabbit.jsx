import React, { useEffect, useState } from "react";
import "./Style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../Components/Header.jsx";
import QRCode from "react-qr-code";

import appConfig from "../../config.json";
import { Form } from "react-bootstrap";
const BASE_URL = appConfig.apiBasePath; //e.g "http://localhost:8080/api"

function EditRabbit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState([]);

  //QR
  const [value, setValue] = useState("{name: 'rabbit', age: 1}");
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(256);

  useEffect(() => {
    axios
      .get(BASE_URL + "/edit-rabbit/" + id)
      .then((res) => {
        console.log(res);
        setValues(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(BASE_URL + "/update-rabbit/" + id, values)
      .then((res) => {
        toast.success("Rabbit Updated!");
        navigate("/rabbitlist");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-div">
      <Sidebar />
      <div className="addRabbit-div">
        <Header />
        <br />
        <h1>Edit Rabbit</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="">Name :</label>
          <input
            type="text"
            name="name"
            value={values.name}
            className="form-control"
            onChange={handleInput}
            required
          />
          <br />
          <label htmlFor="">Age (month/s) :</label>
          <input
            type="number"
            name="age"
            value={values.age}
            className="form-control"
            onChange={handleInput}
            required
          />
          <br />
          <label htmlFor="">Sex :</label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleInput}
            name="sex"
            required
          >
            <option value="" hidden>
              {values.sex}
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
          <br />
          <label htmlFor="">Weight (klg/s) :</label>
          <input
            type="text"
            name="weight"
            value={values.weight}
            className="form-control"
            onChange={handleInput}
            required
          />
          <br />

          <label htmlFor="">Code :</label>
          <div className="App">
            {value && (
              <QRCode
                title="GeeksForGeeks"
                value={`Name: ${values.name} Age: ${values.age} Sex: ${values.sex} Weight: ${values.weight}`}
                bgColor={back}
                fgColor={fore}
                size={size === "" ? 0 : size}
              />
            )}
          </div>
          <br />
          <br />

          <Link to="/rabbitlist" className="btn btn-secondary m-2">
            Cancel
          </Link>
          <button className="btn btn-primary m-2">Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditRabbit;
