const express = require("express");

const useDatabase = require("./database");
const router = require("./routes");
const app = express();

useDatabase();
app.use("/", router);

module.exports = app;
