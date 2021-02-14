const { object, number, string } = require('yup');

const kindergartenSearchSchema = object({
  q: string(),
  minPrice: number().positive(),
  maxPrice: number().positive(),
  locationId: number().positive(),
});

module.exports = kindergartenSearchSchema;
