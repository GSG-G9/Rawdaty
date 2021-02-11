const { connection } = require('../../data');

const getKindergartenId = (kindergartenId) => {
  const sql = {
    text:
      'SELECT kindergartens.id FROM kindergartens  WHERE kindergartens.id=$1 ',
    values: [kindergartenId],
  };
  return connection.query(sql);
};

module.exports = getKindergartenId;
