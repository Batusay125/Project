const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eleporidae",
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

// Add Rabbit
app.post("/addRabbit", (req, res) => {
  const sql = "INSERT INTO rabbits (`name`, `age`, `sex`, `weight`) VALUES (?)";
  const values = [req.body.name, req.body.age, req.body.sex, req.body.weight];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

// Edit rabbit

// app.put("/edit/:id", (req, res) => {
//   const sql =
//     "UPDATE rabbits SET `name` = ?, `age` = ?, `sex` = ?, `weight` = ? WHERE rabbit_id = ?";
//   const values = [req.body.name, req.body.age, req.body.sex, req.body.weight];
//   const id = req.params.id;

//   db.query(sql, [...values, id], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     return res.json(data);
//   });
// });

// Delete Rabbit
app.delete("/deleterabbit/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM rabbits WHERE rabbit_id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

// Rabbit List
app.get("/rabbitlist", (req, res) => {
  db.query("SELECT * FROM rabbits", (err, results) => {
    if (err) {
      console.error("Error fetching rabbits:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM rabbits WHERE rabbit_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Error fetching rabbits:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      console.log(results);
      console.log(id);
      return res.json(results);
    }
  );
});
