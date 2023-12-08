const express = require('express');
const router = express.Router();
const database = require('../services/database');

/* GET database. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await database.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting actors `, err.message);
    next(err);
  }
});

module.exports = router;
