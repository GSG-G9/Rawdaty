const { object, number } = require('yup');

const kindergartenIdSchema = object({
  kindergartenId: number().positive().required(),
});

module.exports = kindergartenIdSchema;
