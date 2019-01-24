CREATE TABLE todo(
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  archived BOOLEAN NOT NULL DEFAULT FALSE,
  created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO todo(description) VALUES
  ('Take a shower'),
  ('Buy food'),
  ('Go to work');