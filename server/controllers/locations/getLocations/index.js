const { getLocationsQuery } = require('../../../database/queries');

const getLocations = async (req, res, next) => {
  try {
    const { rows: data } = await getLocationsQuery();
    res.json({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};

module.exports = getLocations;
