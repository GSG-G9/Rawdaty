const { object, string } = require('yup');

const locationSchema = object({
  mainLocation: string().required(),
  subLocation: string().required(),
});

module.exports = locationSchema;
