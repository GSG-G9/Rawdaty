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
      return res.json({
        message: 'success',
        status: 200,
        data,
      });
    }

    return next(
      boomify(404, 'Page Not Found', 'There is no kindergarten with this id')
    );
  } catch (error) {
    return next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = getSpecificKindergarten;
