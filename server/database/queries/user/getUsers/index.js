const connection = require('../../../data/connection');

const getUsers = () => {
  const sql = {
    text: '',
    values: [],
  };
  return connection.query(sql);
};

module.exports = { getUsers };
