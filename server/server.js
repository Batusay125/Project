const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

const user = require('./routes/user');
app.use('/api', user);

const rabbit = require('./routes/rabbit');
app.use('/api', rabbit);


// // Add Rabbit
// app.post("/addRabbit", (req, res) => {


// // Edit rabbit

// // app.put("/edit/:id", (req, res) => {


// // Delete Rabbit
// app.delete("/deleterabbit/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM rabbit WHERE rabbit_id = ?", [id], (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.json(result);
//   });
// });

// // Rabbit List
// app.get("/rabbitlist", (req, res) => {




