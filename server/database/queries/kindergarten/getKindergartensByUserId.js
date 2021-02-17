const { connection } = require('../../data');

const getKindergartensByUserId = (userId) => {
  const sql = {
    text:
      "SELECT kindergartens.id, kindergartens.kindergarten_name FROM kindergartens WHERE kindergartens.user_id=$1 AND kindergartens.request_status ='approved' AND kindergartens.is_enable ='true'",
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getKindergartensByUserId;
