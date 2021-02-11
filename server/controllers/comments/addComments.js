const {
  addCommentsQuery,
  getKindergartenId,
} = require('../../database/queries');
const { boomify } = require('../../utils');
const { addCommentSchema } = require('../../utils/validation');

const addComments = async (req, res, next) => {
  try {
    const { kindergartenId } = req.params;
    const { userName, comment, rating } = req.body;
    await addCommentSchema.validate(
      { userName, comment, rating, kindergartenId },
      req.params,
      {
        abortEarly: false,
      }
    );
    const { rows: idData } = await getKindergartenId(kindergartenId);
    if (idData.length !== 0) {
      const { rows: data } = await addCommentsQuery(
        kindergartenId,
        userName,
        comment,
        rating
      );
      if (data.length !== 0) {
        res.status(201).json({
          statusCode: 201,
          data,
        });
      } else {
        next(boomify(400, 'Bad Request', 'Failed to insert new comment'));
      }
    } else {
      next(
        boomify(400, 'Bad Request', 'There is no kindergarten with this id')
      );
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
