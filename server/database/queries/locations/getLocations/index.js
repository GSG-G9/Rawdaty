const connection = require('../../../data/connection');

const getLocatoinsQuery = () => {
  const sql = {
    text: 'SELECT * FROM locations',
  };
  return connection.query(sql);
};

module.exports = getLocatoinsQuery;
