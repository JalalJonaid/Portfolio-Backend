const db = require("../db/dbConfig")

const getAllMatchups = async () => {
  try {
    const allMatchups = await db.any("SELECT * FROM matchups");
    return allMatchups;
  } catch (error) {
    return error;
  }
};

const getOneMatchup = async (id) => {
  try {
    const oneMatchup = await db.one("SELECT * FROM matchups WHERE id=$1", id);
    return oneMatchup;
  } catch (error) {
    return error;
  }
};

const createMatchup = async (matchup) => {
  try {
    const { opponent, grade, winrate, skill_based, resistance, mythic } =
      matchup;
    const createdMatchup = await db.one(
      "INSERT INTO matchups (opponent, grade, winrate, skill_based, resistance, mythic) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [opponent, grade, winrate, skill_based, resistance, mythic]
    );
    return createdMatchup;
  } catch (error) {
    return error;
  }
};

const deleteMatchup = async (id) => {
  try {
    const deletedMatchup = await db.one("DELETE FROM matchups WHERE id=$1 RETURNING *", id);
    return deletedMatchup;
  } catch (error) {
    return error;
  }
};

const updateMatchup = async (id, matchup) => {
  try {
    const { opponent, grade, winrate, skill_based, resistance, mythic } =
      matchup;
    const updatedMatchup = await db.one("UPDATE matchups SET opponent=$1, grade=$2, winrate=$3, skill_based=$4, resistance=$5, mythic=$6 WHERE id=$7 RETURNING *", [opponent, grade, winrate, skill_based, resistance, mythic, id]);
    return updatedMatchup;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllMatchups,
  getOneMatchup,
  createMatchup,
  deleteMatchup,
  updateMatchup,
};