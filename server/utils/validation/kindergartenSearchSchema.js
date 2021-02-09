const { object, number, string } = require('yup');

const kindergartenSearchSchema = object({
  q: string(),
  minPrice: number(),
  maxPrice: number(),
  locationId: number(),
});

module.exports = kindergartenSearchSchema;
