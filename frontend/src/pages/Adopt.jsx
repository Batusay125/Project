import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rabbit1 from "../images/rabbit-contact.png";
import "./style.css";
import axios from "axios";
import RabbitData from "./RabbitData.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";

function Adopt() {
  const [data, setData] = useState();
  const [rabbits, setRabbits] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/adopt")
      .then((res) => setRabbits(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-div">
      <Navbar />
      <div className="rehome-div">
        <h2>Adopt a Rabbit</h2>
        <div className="rabbitList">
          {rabbits.map((data, i) => (
            <Card key={i} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Rabbit1} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  Hi, my name is {data.name}. I am {data.age} months old and I
                  am looking for a new home.
                </Card.Text>
                <Link
                  to={`/rabbitdata/${data.rabbit_id}`}
                  className="btn btn-primary"
                >
                  See details
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Adopt;
