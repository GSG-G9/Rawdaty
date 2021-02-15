const connection = require('../../data/connection');

const addUsersQuery = (userName, email, password) => {
  const sql = {
    text:
      'INSERT INTO users(user_name,email,password) VALUES($1 ,$2 ,$3) returning *;',
    values: [userName, email, password],
  };
  return connection.query(sql);
};

module.exports = addUsersQuery;
