const connection = require('../../data/connection');

const getKindergartenQuery = () => {
  const sql = {
    text:
      `SELECT kindergartens.*, locations.location_sub, locations.location_main, ` +
      `(SELECT AVG(comments.rating) AS rating_average FROM comments WHERE ` +
      `comments.kindergarten_id = kindergartens.id), (SELECT COUNT(comments) AS rating_count FROM ` +
      `comments WHERE comments.kindergarten_id = kindergartens.id) FROM kindergartens INNER JOIN ` +
      `locations ON kindergartens.location_id = locations.id ` +
      `WHERE kindergartens.request_status = 'approved' AND kindergartens.is_enable = 'true'`,
  };
  return connection.query(sql);
};

module.exports = getKindergartenQuery;
