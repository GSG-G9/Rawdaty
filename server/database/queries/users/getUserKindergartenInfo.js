const { connection } = require('../../data');

const getUserKindergartenInfo = ({ userId }) => {
  const sql = {
    text:
      "SELECT id, kindergarten_name FROM kindergartens WHERE user_id = $1 AND WHERE kindergartens.request_status = 'approved' AND kindergartens.is_enable = 'true';",
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserKindergartenInfo;
