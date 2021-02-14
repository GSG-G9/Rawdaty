const { postLocationsQuery } = require('../../../database/queries');
const { locationSchema } = require('../../../utils/validation');

const postLocations = async (req, res, next) => {
  try {
    const { subLocation, mainLocation } = req.body;
    await locationSchema.validate(
      { subLocation, mainLocation },
      {
        abortEarly: false,
      }
    );
    const { rows: data } = await postLocationsQuery(subLocation, mainLocation);
    res.status(201).json({ statusCode: 201, data });
  } catch (err) {
    next(err);
  }
};

module.exports = postLocations;
