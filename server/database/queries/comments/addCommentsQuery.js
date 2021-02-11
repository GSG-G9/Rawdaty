const { connection } = require('../../data');

const addCommentsQuery = (kindergartenId, userName, comment, rating) => {
  const sql = {
    text:
      'INSERT INTO comments (kindergarten_id,user_name ,comment, rating) VALUES($1,$2,$3,$4) returning *',
    values: [kindergartenId, userName, comment, rating],
  };
  console.log(sql);
  return connection.query(sql);
};

module.exports = addCommentsQuery;
