const { object, number, string } = require('yup');

const locationSchema = object({
  id: number().positive().required(),
  locatoin_main: string().required(),
  locatoin_sub: string().required(),
});

module.exports = locationSchema;
