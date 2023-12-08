const db = require('./db');
const helper = require('../helper');
const config = require('../config');
//offset is not use in this case
async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows1 = await db.query(
    `SELECT actor_id, first_name, last_name, last_update
    FROM actor`
  );
  const rows2 = await db.query(
    `SELECT film_id, title, description, release_year, language_id
    FROM film`
  );
  const query1 = helper.emptyOrRows(rows1);
  const query2 = helper.emptyOrRows(rows2);
  const meta = {page};

  return {
    query1,
    query2
  }
}

module.exports = {
  getMultiple
}