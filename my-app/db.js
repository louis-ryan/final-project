var spicedPg = require('spiced-pg');

var db = spicedPg('postgres:spicedling:password@localhost:5432/finalproject');

module.exports.getTracks = (bpm, key) => {
  return db.query(`SELECT * FROM tracks WHERE (bpm = $1 AND key = $2)`, [
    bpm,
    key,
  ]);
};
