const { connection } = require('../../data');

const addKindergarten = (
  kindergartenName,
  coverImage,
  description,
  phoneNumber,
  latitude,
  longitude,
  minPrice,
  maxPrice,
  periods,
  imagesGallery
) => {
  const sql = {
    text:
      'INSERT INTO kindergarten (kindergarten_name, cover_image, description, phone_number, latitude, longitude, min_price, max_price, periods, images_gallery) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 , $10) ',
    values: [
      kindergartenName,
      coverImage,
      description,
      phoneNumber,
      latitude,
      longitude,
      minPrice,
      maxPrice,
      periods,
      imagesGallery,
    ],
  };
  return connection.query(sql);
};

module.exports = addKindergarten;
