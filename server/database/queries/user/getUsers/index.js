const connection = require('../../../data/connection');

const getAllUsers = () => {
  const sql = {
    text: 'SELECT * FROM users',
  };
  return connection.query(sql);
};

module.exports = getAllUsers;
