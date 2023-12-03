//checks opponent and resistence type for strings
const checkOpponent = (req, res, next) => {
  if (
    typeof req.body.opponent === "string" ||
    req.body.resistence === "string"
  ) {
    console.log("Opponent entered.");
    next();
  } else {
    res.status(400).json({ error: "Opponent is required." });
  }
};

const checkGrade = (req, res, next) => {
  if (typeof req.body.grade === "string") {
    console.log("Grade entered.");
    next();
  } else {
    res.status(400).json({ error: "Grade is required." });
  }
};

const checkWinrate = (req, res, next) => {
  if (typeof req.body.winrate === "int" || req.body.winrate === undefined) {
    console.log("Winrate entered.");
    next();
  } else {
    res
      .status(400)
      .json({ error: "Winrate should be a number representing a percentage." });
  }
};

//checks skill_based and mythic for boolean
const checkBoolean = (req, res, next) => {
  if (
    req.body.skill_based === true ||
    req.body.skill_based === false ||
    req.body.mythic === true ||
    req.body.mythic === false
  ) {
    console.log("Boolean passed");
    next();
  } else {
    res
      .status(400)
      .json({ error: "Must be a boolean." });
  }
};

module.exports = {
    checkOpponent,
    checkGrade,
    checkWinrate,
    checkBoolean,
};
