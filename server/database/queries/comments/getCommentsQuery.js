const { connection } = require('../../data');

const getCommentsQuery = (kindergartenId) => {
  const sql = {
    text: 'SELECT * FROM comments WHERE kindergarten_id = $1; ',
    values: [kindergartenId],
  };
  return connection.query(sql);
};

module.exports = {
  getCommentsQuery,
};
