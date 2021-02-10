const connection = require('../../data/connection');

const getKindergartenQuery = () =>
  connection.query(`SELECT * FROM kindergartens`);

module.exports = getKindergartenQuery;
