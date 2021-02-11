const connection = require('../../../data/connection');

const getLocatoinsQuery = () => {
  const sql = {
    text: 'SELECT id,location_sub,location_main FROM locations',
  };
  return connection.query(sql);
};

module.exports = getLocatoinsQuery;
