const express = require ('express');
const cors = require('cors');

const app = express();

const matchupsController = require('./controllers/matchupsController.js')
app.use(cors());

app.use(express.json());

app.use("/matchups", matchupsController);

app.get("/", (req, res) => {
    res.send("Welcome to K'sante Matchups Guide!");
  });
  
app.get("*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "page not found" } });
});

  module.exports = app;