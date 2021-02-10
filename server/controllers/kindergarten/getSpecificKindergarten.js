const { getKindergartenById } = require('../../database/queries/kindergarten');
const { boomify } = require('../../utils');
const { kindergartenIdSchema } = require('../../utils/validation');

const getSpecificKindergarten = async (req, res, next) => {
  try {
    const { kindergartenId } = await kindergartenIdSchema.validate(req.params, {
      abortEarly: false,
    });

    const { rows: data } = await getKindergartenById(kindergartenId);
    if (data.length !== 0) {
      res.json({
        statusCode: 200,
        data,
      });
    } else {
      next(
        boomify(404, 'Page Not Found', 'There is no kindergarten with this id')
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

module.exports = getSpecificKindergarten;
