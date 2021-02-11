const connection = require('../../../data/connection');

const postLocationsQuery = () => {
  const sql = {};
  return connection.query(sql);
};

module.exports = postLocationsQuery;
