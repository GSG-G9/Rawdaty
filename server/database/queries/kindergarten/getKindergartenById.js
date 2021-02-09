const { connection } = require('../../data');

const getKindergartenById = (kindergartenId) => {
  const sql = {
    text:
      'SELECT kindergartens.kindergarten_name,locations.location_sub ,locations.location_main ,comments.comment ,comments.rating FROM  kindergartens ,locations,comments WHERE kindergartens.id=$1 AND kindergartens.location_id =locations.id AND kindergartens.id = comments.kindergarten_id',
    values: [kindergartenId],
  };
  return connection.query(sql);
};

module.exports = {
  getKindergartenById,
};
