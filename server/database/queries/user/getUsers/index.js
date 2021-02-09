const connection = require('../../../data/connection');

const getUsers = () => {
  const sql = {
    text: 'SELECT * FROM users',
  };
  return connection.query(sql);
};

module.exports = { getUsers };
