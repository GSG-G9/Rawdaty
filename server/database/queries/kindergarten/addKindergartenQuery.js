const { connection } = require('../../data');

const addKindergartenQuery = ({
  kindergartenName,
  userId,
  coverImage,
  description,
  locationId,
  phoneNumber,
  latitude,
  longitude,
  minPrice,
  maxPrice,
  periods,
  imagesGallery,
}) => {
  const sql = {
    text:
      "INSERT INTO kindergartens (kindergarten_name, user_id, cover_image, description,location_id, phone_number, latitude, longitude, min_price, max_price, periods, image_gallery, request_status, is_enable) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 , $10, $11 , $12, 'approved' , 'true') ",
    values: [
      kindergartenName,
      userId,
      coverImage,
      description,
      locationId,
      phoneNumber,
      latitude,
      longitude,
      minPrice,
      maxPrice,
      periods
        .split('')
        .map((e) => {
          if (e === '[') return '{';
          if (e === ']') return '}';
          return null;
        })
        .join(''),
      // .replace('[', '{')
      // .replace(']', '}'),
      imagesGallery.replace('[', '{').replace(']', '}'),
    ],
  };
  return connection.query(sql);
};

module.exports = addKindergartenQuery;
