const { object, number, mixed } = require('yup');

const addCommentSchema = object({
  userName: mixed().required(),
  comment: mixed().required(),
  rating: number().positive().required(),
  kindergartenId: number().positive().required(),
});

module.exports = addCommentSchema;
