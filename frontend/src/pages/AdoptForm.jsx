import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import SecureStore from "react-secure-storage";

function AdoptForm() {
  const { id, name } = useParams();
  const navigateTo = useNavigate();
  const date = new Date().toLocaleDateString();
  const user = SecureStore.getItem("userToken");

  const [values, setValues] = useState({
    rabbit_id: id,
    data: "",
    fullname: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    barangay: "",
    postalcode: "",
    reason: "",
    otherpets: "",
    user_id: user.id,
    transaction_status: "PENDING"
  });
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/rabbitdata/" + id + "/adopt-form", values)
      .then((res) => {
        console.log(res);
        toast.success("Application sent!");
        navigateTo("/myapplication");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="main-div">
      <Navbar />
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <h4>Adoption Application for {name}</h4>
          <br />
          <label htmlFor="fullname">
            Full Name <span className="errmsg">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            required
            onChange={handleInput}
          />
          <br />
          <label htmlFor="email">
            Email <span className="errmsg">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            onChange={handleInput}
          />
          <br />
          <label htmlFor="phone">
            Phone <span className="errmsg">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            required
            onChange={handleInput}
          />
          <br />
          <label htmlFor="date">
            Date <span className="errmsg">*</span>
          </label>
          <input
            type="date"
            name="date"
            className="form-control"
            required
            onChange={handleInput}
          />
          <br />
          <label>
            Address <span className="errmsg">*</span>
          </label>
          <div className="address">
            <Form.Select
              aria-label="Default select example"
              onChange={handleInput}
              name="province"
              required
            >
              <option value="" hidden>
                Province
              </option>
              <option value="Camarines Sur">Camarines Sur</option>
            </Form.Select>
            <input
              type="text"
              name="city"
              placeholder="City/Municipality"
              className="form-control"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              name="barangay"
              placeholder="Barangay"
              className="form-control"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              name="postalcode"
              placeholder="Postal code"
              className=" form-control"
              onChange={handleInput}
              required
            />
          </div>
          <br />
          <hr />
          <br />
          <label htmlFor="environment">
            Home environment <span className="errmsg">*</span>
          </label>
          <input type="file" className="form-control" />
          <br />
          <label htmlFor="reason">
            Reason for Adoption <span className="errmsg">*</span>
            <textarea
              name="reason"
              rows={2}
              cols={100}
              className="form-control"
              onChange={handleInput}
              required
            />
          </label>
          <br />
          <label htmlFor="otherpets">
            Other pets <span className="errmsg">*</span>
            <textarea
              name="otherpets"
              rows={2}
              cols={100}
              className="form-control"
              onChange={handleInput}
              required
              placeholder="If any"
            />
          </label>
          <Link to="/adopt" className="btn btn-secondary cancel">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdoptForm;
