\c matchup_dev;

INSERT INTO matchups (opponent, grade, winrate, skill_based, resistance, mythic)
VALUES
    ('Garen', 'Very hard', 46, false, 'HP', true),
    ('Gwen', 'Very hard', 45, false, 'MR', true),
    ('Jax', 'Very hard', 47, true, 'Both', true),
    ('Fiora', 'Very hard', 45, true, 'HP', true),
    ('Riven', 'Hard', 45, true, 'AR', true),
    ('Kayle', 'Very hard', 43, false, 'AR', true),
    ('Aatrox', 'Medium', 50, true, 'AR', true),
    ('Mordekaiser', 'Medium', 49, true, 'MR', true),
    ('Jayce', 'Easy', 54, false, 'AR', true),
    ('Gangplank', 'Medium', 50, true, 'AR', true),
    ('Irelia', 'Easy', 52, true, 'AR', true),
    ('Sion', 'Medium', 52, false, 'AR', true),
    ('Kennen', 'Easy', 52, false, 'MR', false),
    ('Camille', 'Medium', 47, true, 'HP', true),
    ('Yone', 'Medium', 49, true, 'AR', false);