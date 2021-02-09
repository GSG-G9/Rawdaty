const connection = require('../../data/connection');

const getKindergartenSearch = ({ q, minPrice, maxPrice, locationId }) => {
  let sqlText =
    'SELECT kindergartens.id, kindergartens.kindergarten_name, kindergartens.cover_image, kindergartens.phone_number, kindergartens.min_price, kindergartens.max_price, locations.location_sub FROM kindergartens INNER JOIN locations ON locations.id = kindergartens.location_id WHERE ';
  const values = [];

  if (q) {
    sqlText += `kindergarten_name like $${values.length + 1} AND `;
    values.push(q);
  }

  if (minPrice && maxPrice) {
    sqlText += `( min_price <= $${values.length + 1} AND max_price >= $${
      values.length + 2
    }) AND `;
    values.push(minPrice);
    values.push(maxPrice);
  }

  if (locationId) {
    sqlText += `location_id = (SELECT id FROM locations WHERE id = $${
      values.length + 1
    }) AND `;
    values.push(locationId);
  }

  const sql = {
    text: sqlText.slice(0, -4),
    values,
  };

  return connection.query(sql);
};

module.exports = getKindergartenSearch;
