import React, { useState } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import Header from "../Components/Header.jsx";

import appConfig from "../../config.json";
const BASE_URL = appConfig.apiBasePath; //e.g "http://localhost:8080/api"



function AddRabbit() {
  const navigate = useNavigate();

  const [file, setFile] = useState();
  const [img, setImg] = useState();
  
  const onFileChange = e => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  

  const [values, setValues] = useState({
    name: "",
    age: "",
    sex: "",
    weight: ""
  });

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', img);
    const postData = JSON.stringify(values);
    formData.append('values', postData);

    axios
      .post(BASE_URL + "/add-rabbit", formData)
      .then((res) => {
        toast.success("Successfully added!");
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
        <h1>Add Rabbit</h1>
        <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="">Image :</label>
          <input
            type="file"
            name="image"
            className="form-control"
            id="image"
            onChange={onFileChange} />
          <br />
          <img src={file} />
          <br />
          
          <label htmlFor="">Name :</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleInput}
            required
          />
          <br />
          <label htmlFor="">Age (month/s) :</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={handleInput}
            required
          />
          <br />
          <label htmlFor="sex">Sex :</label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleInput}
            name="sex"
            required
          >
            <option value="" hidden>
              Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
          <br />
          <label htmlFor="">Weight (klg/s) :</label>
          <input
            type="text"
            name="weight"
            className="form-control"
            onChange={handleInput}
            required
          />
          <br />
          

          <div className="actions">
            <Link to="/rabbitlist" className="secondary text-decoration-none">
              Back
            </Link>
            <button className="primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRabbit;
