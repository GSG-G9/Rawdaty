const { object, string, number, mixed } = require('yup');

const addKindergartenSchema = object({
  kindergartenName: string().required(),
  coverImage: mixed().required(),
  description: mixed().required(),
  locationId: number(),
  phoneNumber: number().positive().required(),
  latitude: number(),
  longitude: number(),
  minPrice: number().positive(),
  maxPrice: number().positive(),
  periods: string(),
  imagesGallery: string(),
});

module.exports = addKindergartenSchema;
