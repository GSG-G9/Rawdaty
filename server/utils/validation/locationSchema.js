const { object, number, string } = require('yup');

const locationSchema = object({
  locationId: number().positive().required(),
  locationMain: string().required(),
  locationSub: string().required(),
});

module.exports = locationSchema;
