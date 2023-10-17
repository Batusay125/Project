const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/pending-adoption", (req, res) => {
  db.query("SELECT count(*) as pending FROM adoption where transaction_status = 'PENDING'", (err, results) => {
    if (err) {
      console.error("Error fetching :", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    return res.json(results);
  });

});

module.exports = router;
