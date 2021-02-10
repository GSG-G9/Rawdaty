// const { default: axios } = require('axios');
const { getKindergartenQuery } = require('../../database/queries');

const getKindergarten = async (req, res, next) => {
  try {
    const { rows: data } = await getKindergartenQuery();
    res.json({ statusCode: 200, data });
  } catch (error) {
    next(error);
  }
};
module.exports = getKindergarten;
