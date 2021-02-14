const { postLocationsQuery } = require('../../../database/queries');
const { locationSchema } = require('../../../utils/validation');
const { boomify } = require('../../../utils');

const postLocations = async (req, res, next) => {
  try {
    const { subLocation, mainLocation } = req.body;
    await locationSchema.validate(
      { subLocation, mainLocation },
      {
        abortEarly: false,
      }
    );
    if (subLocation && mainLocation) {
      const { rows: data } = await postLocationsQuery(
        subLocation,
        mainLocation
      );
      res.status(201).json({ statusCode: 201, data });
    } else {
      next(boomify(400, 'Bad Request', 'Sub and main locations are required'));
    }
  } catch (error) {
    next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = postLocations;
