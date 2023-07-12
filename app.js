require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const { error404Handler } = require("./middleware");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);

app.use(error404Handler);

module.exports = app;
