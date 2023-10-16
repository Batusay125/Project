const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/breeding", (req, res) => {
  db.query("SELECT * FROM breeding_pair", (err, results) => {
    if (err) {
      console.error("Error fetching rabbit:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });
});

router.post("/pair-rabbit", (req, res) => {
  const sql = "INSERT INTO breeding_pair (`buck_id`, `doe_id`, `pairing_date` ) VALUES (?)";
  const values = [req.body.male_rabbit_id, req.body.female_rabbit_id, new Date()];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

module.exports = router;
