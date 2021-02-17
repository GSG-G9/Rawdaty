const { connection } = require('../../data');

const getKindergartenById = (kindergartenId) => {
  const sql = {
    text:
      'SELECT  kindergartens.kindergarten_name, kindergartens.cover_image,kindergartens.description, kindergartens.phone_number, kindergartens.min_price, kindergartens.max_price,  kindergartens.periods,kindergartens.image_gallery,locations.location_sub, locations.location_main, rating.rating_count, rating.rating_average ' +
      'FROM kindergartens ' +
      'INNER JOIN locations ON locations.id = kindergartens.location_id ' +
      'LEFT JOIN ' +
      '(select COUNT(rating) AS rating_count, AVG(rating)::numeric(10,0)  AS rating_average, kindergarten_id FROM comments GROUP BY kindergarten_id ) ' +
      'AS rating ON rating.kindergarten_id = kindergartens.id ' +
      "WHERE kindergartens.request_status = 'approved' AND kindergartens.is_enable = 'true'  AND kindergartens.id=$1 ",
    values: [kindergartenId],
  };
  return connection.query(sql);
};

module.exports = getKindergartenById;
