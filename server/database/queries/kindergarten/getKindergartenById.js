const { connection } = require('../../data');

const getKindergartenById = (kindergartenId) => {
  const sql = {
    text:
      'SELECT kindergartens.kindergarten_name,kindergartens.cover_image,kindergartens.description, kindergartens.phone_number,kindergartens.min_price,kindergartens.max_price, kindergartens.periods,kindergartens.image_gallery,locations.location_sub ,locations.location_main FROM kindergartens ,locations WHERE kindergartens.id=$1 AND kindergartens.location_id =locations.id ',
    values: [kindergartenId],
  };
  return connection.query(sql);
};

module.exports = {
  getKindergartenById,
};
