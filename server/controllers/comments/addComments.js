const { addCommentsQuery } = require('../../database/queries/comments');
const { boomify } = require('../../utils');
const { addCommentSchema } = require('../../utils/validation');
const { kindergartenIdSchema } = require('../../utils/validation');

const addComments = async (req, res, next) => {
  try {
    const { kindergartenId } = await kindergartenIdSchema.validate(req.params, {
      abortEarly: false,
    });
    console.log(kindergartenId);
    console.log(req.body);
    console.log('id');
    const { userName, comment, rating } = await addCommentSchema.validate(
      req.body,
      {
        abortEarly: false,
      }
    );
    console.log('body');
    const { rows: data } = await addCommentsQuery(
      kindergartenId,
      userName,
      comment,
      rating
    );
    if (data.length !== 0) {
      console.log(data);
      res.json({
        statusCode: 200,
        data,
      });
    } else {
      next(boomify(404, 'Page Not Found', 'There is no comments for this id'));
    }
  } catch (error) {
    next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = addComments;
