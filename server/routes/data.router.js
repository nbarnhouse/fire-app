const express = require('express');
const router = express.Router();
//const axios = require('axios');
const pool = require('../modules/pool');

//Get route for DB data
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM locations';
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error fetching data from the database', error);
      res.sendStatus(500);
    });
});

module.exports = router;
