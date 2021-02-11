const { postLocationsQuery } = require('../../../database/queries');

const postLocations = async (req, res, next) => {
  try {
    const { rows: data } = await postLocationsQuery(req.body);
    res.json(201).json({ statusCode: 201, data });
  } catch (err) {
    next(err);
  }
};

module.exports = postLocations;
