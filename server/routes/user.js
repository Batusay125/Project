const express = require('express')
const router = express.Router();
const db = require('../config/db');


router.get('/users', (req, res) => {
    db.query("SELECT * FROM user", (err, results) => {
      if (err) {
        console.error("Error fetching :", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      return res.json(results);
    });
});

module.exports = router;