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
  checkBoolean,
} = require("../validations/checkMatchups.js");

matchups.get("/", async (req, res) => {
  const allMatchups = await getAllMatchups();

  if (allMatchups[0]) {
    res.status(200).json(allMatchups);
  } else {
    res.status(500).json({ error: "Could not get matchups." });
  }
});

matchups.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneMatchup = await getOneMatchup(id);

    if (oneMatchup.id) {
      res.status(200).json(oneMatchup);
    } else {
      res.status(404).json({ error: "No matchup with that id." });
    }
  } catch (error) {
    res.status(400).json({ error: "Could not get single matchup" });
  }
});

matchups.post(
  "/",
  checkOpponent,
  checkGrade,
  checkWinrate,
  checkBoolean,
  async (req, res) => {
    try {
      const createdMatchup = await createMatchup(req.body);
      res.status(201).json(createdMatchup);
    } catch (error) {
      res.status(400).json({ error: "Matchup could not be created." });
    }
  }
);

matchups.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMatchup = await deleteMatchup(id);

    if (deletedMatchup.id) {
      res.status(200).json(deletedMatchup);
    } else {
      res.status(404).json({ error: "No matchup to delete with that ID" });
    }
  } catch (error) {
    res.status(400).json({ error: "Matchup could not be deleted." });
  }
});

matchups.put(
  "/:id",
  checkOpponent,
  checkGrade,
  checkWinrate,
  checkBoolean,
  async (req, res) => {
    try {
      const { id } = req.params;
      const updatedMatchup = await updateMatchup(id, req.body);

      if (updatedMatchup.id) {
        res.status(200).json(updatedMatchup);
      } else {
        res.status(404).json({ error: "No matchup with that ID." });
      }
    } catch (error) {
      res.status(400).json({ error: "Matchup was not updated." });
    }
  }
);

module.exports = matchups;