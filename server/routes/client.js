const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/signup", (req, res) => {
  const email = req.body.email;
  const checkEmailQuery = "SELECT * FROM user WHERE email = ?";
  const insertUserQuery =
    "INSERT INTO user (`name`, `email`, `password`) VALUES (?)";
  const values = [req.body.name, email, req.body.password];

  // Check if the email already exists
  db.query(checkEmailQuery, [email], (err, result) => {
    if (err) {
      return res.status(500).json("Error");
    }

    if (result.length > 0) {
      // Email already exists, return an error response
      return res.status(400).json("Email already exists");
    } else {
      // Email is unique, insert the new user
      db.query(insertUserQuery, [values], (err, data) => {
        if (err) {
          return res.status(500).json("Error");
        }
        return res.json(data);
      });
    }
  });
});

router.post("/login-client", (req, res) => {
  const sql = "SELECT * FROM user WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json({ Message: "Error" });
    }
    if (data.length > 0) {
      // User is authenticated, generate a JWT token
      const user = {
        email: req.body.email,
      };
      //   const token = jwt.sign(user, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour
      return res.json({ Message: "Success" });
    }
    return res.json({ Message: "Failed" });
  });
});

// Protected route example
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Middleware function to verify the JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
}

// Adopt
router.get("/adopt", (req, res) => {
  db.query("SELECT * FROM rabbit", (err, results) => {
    if (err) {
      console.error("Error fetching rabbits:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

// Rabbit Data
router.get("/rabbitdata/:id", (req, res) => {
  const sql = "SELECT * FROM rabbit WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error" });
    return res.json(result);
  });
});

//Add rabbit

router.post("/addrabbit", (req, res) => {
  const sql = "INSERT INTO rabbit (`name`, `age`, `sex`, `weight`) VALUES (?)";
  const values = [req.body.name, req.body.age, req.body.sex, req.body.weight];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

//end

//Adopt Form
router.post("/rabbitdata/:id/adopt-form", (req, res) => {
  const values = [
    req.body.rabbit_id,
    req.body.date,
    req.body.fullname,
    req.body.email,
    req.body.phone,
    req.body.province,
    req.body.city,
    req.body.barangay,
    req.body.postalcode,
    req.body.reason,
    req.body.otherpets,
  ];
  const sql =
    "INSERT INTO adoption (`rabbit_id`, `adoption_date`, `fullname`, `email`, `phone`, `province`, `city`, `barangay`, `postal_code`, `reason_for_adoption`, `other_pets`) VALUES (?)";
  db.query(sql, [values], (error, results) => {
    if (error) {
      return res.json("Error");
    }
    return res.json(results);
  });
});

// routerlication list
router.get("/myrouterlication", (req, res) => {
  db.query("SELECT * FROM adoption", (err, result) => {
    if (err) {
      console.log(err);
      res.json(err);
      return;
    }
    return res.json(result);
  });
});

// Delete routerlication
router.delete("/delete_routerlication/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM adoption WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

// Rabbit List

router.get("/rabbitlist", (req, res) => {
  db.query("SELECT * FROM rabbit", (err, results) => {
    if (err) {
      console.error("Error fetching rabbits:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results);
  });
});

module.exports = router;
