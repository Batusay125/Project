const express = require("express");
const router = express.Router();
const db = require("../config/db");

//PostMapping
router.post("/add-rabbit", (req, res) => {
  const sql = "INSERT INTO rabbit (`name`, `age`, `sex`, `weight`) VALUES (?)";
  const values = [req.body.name, req.body.age, req.body.sex, req.body.weight];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

//GetMapping
router.get("/rabbit", (req, res) => {
  db.query("SELECT * FROM rabbit where id = 1", (err, results) => {
    if (err) {
      console.error("Error fetching rabbit:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

router.get("/rabbits", (req, res) => {
  db.query("SELECT * FROM rabbit", (err, results) => {
    if (err) {
      console.error("Error fetching rabbit:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

// Get male rabbit
router.get("/rabbit/male", (req, res) => {
  db.query(`SELECT * FROM rabbit WHERE sex = "male"`, (err, results) => {
    if (err) {
      console.error("Error fetching rabbit:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

// Get female rabbit
router.get("/rabbit/female", (req, res) => {
  db.query(`SELECT * FROM rabbit WHERE sex = "female"`, (err, results) => {
    if (err) {
      console.error("Error fetching rabbit:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

router.get("/edit-rabbit/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM rabbit WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error fetching rabbit:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

//PutMapping
router.put("/update-rabbit/:id", (req, res) => {
  const sql =
    "UPDATE rabbit SET `name` = ?, `age` = ?, `sex` = ?, `weight` = ? WHERE id = ?";
  const values = [req.body.name, req.body.age, req.body.sex, req.body.weight];
  const id = req.params.id;

  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

//DeleteMapping
router.delete("/delete-rabbit/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM rabbit WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

module.exports = router;
