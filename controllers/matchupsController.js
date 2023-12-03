const express = require("express");

const {
  getAllMatchups,
  getOneMatchup,
  createMatchup,
  deleteMatchup,
  updateMatchup,
} = require("../queries/matchups");

const matchups = express.Router();
const {
  checkOpponent,
  checkGrade,
  checkWinrate,
  checkResistance,
  checkBoolean,
} = require("../validations/checkMatchups.js");