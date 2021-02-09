const connection = require('../../data/connection');

const getKindergartenSearch = ({ q, minPrice, maxPrice, locationId }) => {
  let text =
    'SELECT kindergartens.id, kindergartens.kindergarten_name, kindergartens.cover_image, kindergartens.phone_number, kindergartens.min_price, kindergartens.max_price, locations.location_sub FROM kindergartens INNER JOIN locations ON locations.id = kindergartens.location_id WHERE ';
  const values = [];

  if (q) {
    text += `kindergarten_name like $${values.length + 1} AND `;
    values.push(q);
  }

  if (minPrice && maxPrice) {
    text += `( min_price <= $${values.length + 1} AND max_price >= $${
      values.length + 2
    }) AND `;
    values.push(minPrice);
    values.push(maxPrice);
  }

  if (locationId) {
    text += `location_id = (SELECT id FROM locations WHERE id = $${
      values.length + 1
    }) AND `;
    values.push(locationId);
  }

  text = text.slice(0, -4);

  return connection.query({
    text,
    values,
  });
};

module.exports = getKindergartenSearch;
