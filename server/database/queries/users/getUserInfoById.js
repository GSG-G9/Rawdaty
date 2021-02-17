const { connection } = require('../../data');

const getUserInfoById = (userId) => {
  const sql = {
    text: 'SELECT id, user_name, is_admin FROM users WHERE id = $1',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserInfoById;
