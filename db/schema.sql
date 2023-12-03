DROP DATABASE IF EXISTS matchup_dev;

CREATE DATABASE matchup_dev;

\c matchup_dev;

CREATE TABLE matchups (
    id SERIAL PRIMARY KEY,
    opponent TEXT NOT NULL,
    grade TEXT,
    winrate INT,
    skill_based BOOLEAN,
    resistance TEXT,
    mythic BOOLEAN
);