const connection = require('../../../data/connection');

const getLocationsQuery = () => {
  const sql = {
    text: 'SELECT * FROM locations',
  };
  return connection.query(sql);
};

module.exports = getLocationsQuery;
