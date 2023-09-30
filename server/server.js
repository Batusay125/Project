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
