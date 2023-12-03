const express = require("express");
const cors = require("cors");
const app = express();

const matchupController = require("./controllers/matchupController");

app.use(cors());
app.use(express.json());
app.use("/matchup", matchupController);


app.get("/", (req, res) => {
  res.send("Welcome to the Matchup Resource Guide.");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});

module.exports = app;