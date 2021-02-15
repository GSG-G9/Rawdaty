const { connection } = require('../../data');

const deleteKindergartenQuery = (kindergartenId) => {
  const sql = {
    text: 'DELETE * FROM kindergartens WHERE kindergartens.id=$1  CASCADE',
    values: [kindergartenId],
  };
  return connection.query(sql);
};

module.exports = deleteKindergartenQuery;
