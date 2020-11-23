-- database for tracks id, name, artsit, bpm, key, youtube url + whichever details

DROP TABLE IF EXISTS tracks CASCADE;

CREATE TABLE tracks(
    id SERIAL PRIMARY KEY,
    url VARCHAR(255),
    bpm VARCHAR(255),
    key VARCHAR(255)
);

INSERT INTO tracks (url, bpm, key)
VALUES (https://youtu.be/4R9Cki4ZrP0, 90, A);