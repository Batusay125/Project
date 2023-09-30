import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";

function AdoptForm() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    barangay: "",
    postalcode: "",
    otherpets: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(Validation(values));
    // if (
    //   errors.fullname === "" &&
    //   errors.email === "" &&
    //   errors.phone === "" &&
    //   errors.province === "" &&
    //   errors.city === "" &&
    //   errors.barangay === "" &&
    //   errors.postalcode === "" &&
    //   errors.otherpets === ""
    // ) {
    axios
      .post("http://localhost:8081/form", values)
      .then((res) => {
        console.log(res);
        toast.success("Account created");
        navigate("/");
      })
      .catch((err) => console.log(err));
    // }
  };

  return (
    <div className="adoptForm">
      <form className="form" onSubmit={handleSubmit}>
        <Link to="/adopt">
          <GrClose className="close-btn" />
        </Link>
        <label htmlFor="fullname">Full name (Lastname, Firstname, MI.)</label>
        <input
          type="text"
          name="fullname"
          className="form-control"
          placeholder="e.g. Dela Cruz, Juan A."
          onChange={handleInputChange}
          required
        />

        <br />

        <label htmlFor="email">Email (Active email)</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="juan@delacruz.gmail.com"
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="phone">Phone (Active phone number)</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          placeholder="09XXXXXXXXX"
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="province">Province</label>
        <input
          type="text"
          name="province"
          className="form-control"
          placeholder="Province"
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="city">City/Municipality</label>
        <input
          type="text"
          name="city"
          className="form-control"
          placeholder="City"
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="barangay">Barangay</label>
        <input
          type="text"
          name="barangay"
          className="form-control"
          placeholder="Barangay"
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="postalcode">Postal Code</label>
        <input
          type="text"
          name="postalcode"
          className="form-control"
          placeholder="Postal code"
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="otherpets">Other Pets (if any)</label>
        <textarea
          name="otherpets"
          rows="2"
          className="form-control"
          placeholder="If any..."
          onChange={handleInputChange}
        ></textarea>

        <Link type="submit" className="btn btn-primary mt-4 form-control">
          Submit
        </Link>
      </form>
    </div>
  );
}

export default AdoptForm;
