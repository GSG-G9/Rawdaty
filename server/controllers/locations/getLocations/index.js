const { getLocatoinsQuery } = require('../../../database/queries');

const getLocations = async (req, res, next) => {
  try {
    const { rows: data } = await getLocatoinsQuery();
    res.json({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};

module.exports = getLocations;
