const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/adoption", (req, res) => {
  db.query("SELECT * FROM adoption where id = 8", (err, results) => {
    if (err) {
      console.error("Error fetching rabbit:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

router.get("/adoptions", (req, res) => {
  db.query("SELECT * FROM adoption", (err, results) => {
    if (err) {
      console.error("Error fetching :", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

router.get("/myapplication", (req, res) => {
  db.query("SELECT * FROM adoption", (err, results) => {
    if (err) {
      console.error("Error fetching :", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

module.exports = router;
