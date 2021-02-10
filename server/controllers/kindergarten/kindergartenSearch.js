const { getKindergartenSearch } = require('../../database/queries');
const { kindergartenSearchSchema } = require('../../utils/validation');
const { boomify } = require('../../utils');

const kindergartenSearch = async (req, res, next) => {
  try {
    const {
      q,
      minPrice,
      maxPrice,
      locationId,
    } = await kindergartenSearchSchema.validate(req.query, {
      abortEarly: false,
    });

    if (!q && (!minPrice || !maxPrice) && !locationId) {
      return next(
        boomify(
          400,
          'Validation Error',
          'At least one of these (q, minPrice & maxPrice,locationId) values is required'
        )
      );
    }

    const { rows: data } = await getKindergartenSearch({
      q,
      minPrice,
      maxPrice,
      locationId,
    });

    const StatusCode = 200;
    return res.status(StatusCode).json({
      StatusCode,
      data,
    });
  } catch (error) {
    return next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = kindergartenSearch;
