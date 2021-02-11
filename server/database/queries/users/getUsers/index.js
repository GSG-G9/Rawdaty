const connection = require('../../../data/connection');

const getUsersQuery = () => {
  const sql = {
    text: 'SELECT id,user_name,email,is_admin,create_at FROM users',
  };
  return connection.query(sql);
};

module.exports = getUsersQuery;
