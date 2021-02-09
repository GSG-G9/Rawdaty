const connection = require('../data/connection');

const getKindergarten = () =>
  connection.query(
    `SELECT * FROM kindergarten WHERE is_enable = ture AND request_status = 'Accepted'`
  );
module.exports = getKindergarten;
