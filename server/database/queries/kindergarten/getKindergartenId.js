const { connection } = require('../../data');

const getKindergartenId = (kindergartenId) => {
  const sql = {
    text:
      "SELECT kindergartens.id FROM kindergartens  WHERE kindergartens.id=$1 AND kindergartens.request_status ='approved' AND kindergartens.is_enable ='true'",
    values: [kindergartenId],
  };
  return connection.query(sql);
};

module.exports = getKindergartenId;
