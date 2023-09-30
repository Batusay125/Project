import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RabbitList from "./RabbitList.jsx";

function AddRabbit() {
  const [values, setValues] = useState({
    name: "",
    age: "",
    sex: "",
    weight: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8081/addrabbit", values)
      .then((res) => {
        alert("Rabbit Added!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-center">Add a Rabbit</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label for="">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          className="form-control"
          required
        />
        <label for="">Age (months)</label>
        <input
          type="number"
          name="age"
          onChange={handleInput}
          className="form-control"
          required
        />
        <label for="">Sex</label>
        <input
          type="text"
          name="sex"
          onChange={handleInput}
          className="form-control"
          required
        />
        <label for="">Weight (klg)</label>
        <input
          type="number"
          name="weight"
          onChange={handleInput}
          className="form-control"
          required
        />

        <button className="btn btn-primary mt-2">Add</button>
      </form>
      <RabbitList />
    </div>
  );
}

export default AddRabbit;
