const { getCommentsQuery } = require('../../database/queries/comments');
const { boomify } = require('../../utils');
const { kindergartenIdSchema } = require('../../utils/validation');

const getComments = async (req, res, next) => {
  try {
    const { kindergartenId } = await kindergartenIdSchema.validate(req.params, {
      abortEarly: false,
    });

    const { rows: data } = await getCommentsQuery(kindergartenId);
    if (data.length !== 0) {
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

module.exports = getComments;
