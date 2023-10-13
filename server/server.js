const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.listen(8081, () => {
  console.log("Server is running on port 8080");
});

const user = require("./routes/user");
app.use("/api", user);

const rabbit = require("./routes/rabbit");
app.use("/api", rabbit);

const adoption = require("./routes/adoption");
app.use("/api", adoption);

const breeding = require("./routes/breeding");
app.use("/api", breeding);

const client = require("./routes/client");
app.use("/api", client);
